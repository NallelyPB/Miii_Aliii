const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const bgMusic = document.querySelector("#bg-music"); // 🎵 Referencia al audio

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Mostrar el corazón grande
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Mostrar los corazones flotantes
    const floatingHearts = document.querySelectorAll('.floating-heart');
    floatingHearts.forEach(heart => {
      heart.style.opacity = '1';
    });

    // 🎵 Reproducir música al abrir la carta
    bgMusic.play();

  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar el corazón grande
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';

    // Ocultar los corazones flotantes
    const floatingHearts = document.querySelectorAll('.floating-heart');
    floatingHearts.forEach(heart => {
      heart.style.opacity = '0';
    });

    // 🎵 Pausar y reiniciar música al cerrar la carta
    bgMusic.pause();
    bgMusic.currentTime = 0;

  }, 500);
});
