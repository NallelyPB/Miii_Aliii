document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Entre 3s y 6s
        heart.style.fontSize = `${Math.random() * 20 + 20}px`; // Entre 20px y 40px
        heartsContainer.appendChild(heart);

        // Elimina el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(createHeart, 500); // Genera corazones cada 500ms
});
