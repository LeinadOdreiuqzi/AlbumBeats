import { initAudioPlayer } from './audio-player.js';

document.addEventListener("DOMContentLoaded", () => {
    // Configuración inicial del header y scroll
    const header = document.querySelector("header");
    const heroSection = document.querySelector(".hero-section");
    const main = document.querySelector("main");
    const threshold = window.innerHeight;
    const scrollDown = document.querySelector(".scroll-down");

    // Configurar el main para que comience después del header
    main.style.marginTop = `${threshold}px`;

    // Inicialmente ocultar el contenido del header si no estamos en la parte superior
    if (window.scrollY > 0) {
        heroSection.style.opacity = "0";
    }

    // Función para manejar el scroll
    function updateScroll() {
        const scrolled = window.scrollY;

        // Efecto de desvanecimiento para el header
        if (scrolled <= threshold) {
            const headerOpacity = 1 - scrolled / threshold;
            header.style.opacity = headerOpacity.toString();
            heroSection.style.opacity = scrolled < 10 ? "1" : "0";
        } else {
            header.style.opacity = "0";
            heroSection.style.opacity = "0";
        }
    }

    // Manejar el scroll para el botón de scroll down
    if (scrollDown) {
        window.addEventListener("scroll", () => {
            scrollDown.style.opacity = window.scrollY > 50 ? "0" : "1";
        });
    }

    // Configurar el scroll y actualizar el estado inicial
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    // Configurar el botón de scroll down
    if (scrollDown) {
        scrollDown.addEventListener("click", () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    }

    // Inicializar el reproductor de audio del "Mejor beat"
    const bestBeatPlayer = document.querySelector('.best-beat .custom-audio-player');
    if (bestBeatPlayer) {
        initAudioPlayer(bestBeatPlayer);
    }
});
