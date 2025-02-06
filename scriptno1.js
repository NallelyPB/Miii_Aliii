document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "🔪";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 30 + 30 + "px"; // Tamaño entre 30px y 60px
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
