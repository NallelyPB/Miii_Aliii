document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".fade-in");
    const gifIframe = document.querySelector(".gif-container iframe");
    const gifImg = document.querySelector(".gif-img");

    // Aplica fade-in progresivo a los párrafos
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = "1";
        }, index * 500); // Retraso progresivo
    });

    // Si el GIF de Tenor no carga, muestra la imagen local
    gifIframe.addEventListener("error", function () {
        gifIframe.style.display = "none";
        gifImg.style.display = "block";
    });
});
