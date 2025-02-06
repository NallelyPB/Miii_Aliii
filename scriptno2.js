document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.querySelector("#btn-no");
    let counter = 0;

    function moverAleatoriamente(btn) {
        btn.style.position = "absolute";
        btn.style.fontWeight = "bolder";
        btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";

        counter++;

        if (counter === 3) {
            btn.innerHTML = "¡¿QUÉ HACES?! 😵";
        } else if (counter === 5) {
            btn.innerHTML = "DEJA DE INTENTARLO 😡";
        } else if (counter >= 7) {
            btn.innerHTML = "¡SÍ O SÍ! 😈💖";
        }
    }

    btnNo.addEventListener("mouseenter", function (e) {
        moverAleatoriamente(e.target);
    });

    /* Generar corazones y cuchillos flotando */
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Alternar entre corazones y cuchillos
        heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🔪";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 30 + "px"; // Tamaño aleatorio
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
