const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0;
const totalSlides = 4; // Número de cortes
const slideWidth = 675; // Largura de cada slide ajustada para 50%

function updateCarousel() {
    const newPosition = -currentIndex * slideWidth;
    track.style.transform = `translateX(${newPosition}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});
