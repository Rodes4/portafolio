// Variables
const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    // Mover el contenedor de imágenes
    const offset = -currentIndex * images[0].clientWidth; // Calcula el desplazamiento
    imagesContainer.style.transform = `translateX(${offset}px)`;

    // Actualizar los indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

 // Evento para el botón "Siguiente"
 nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Ciclo infinito
    updateCarousel();
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Ciclo infinito
    updateCarousel();
});

// Evento para los indicadores
indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-slide'));
        updateCarousel();
    });
});

 // Ajustar el carrusel al redimensionar la ventana
    window.addEventListener('resize', updateCarousel);