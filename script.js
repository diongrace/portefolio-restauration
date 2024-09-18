let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide'); // Sélectionne toutes les diapositives
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active'); // Cache toutes les diapositives
    });
    slides[index].classList.add('active'); // Montre la diapositive active
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Passe à la diapositive suivante
    showSlide(currentSlide);
}

// Initialisation : Affiche la première diapositive
showSlide(currentSlide);

// Changer de diapositive toutes les 5 secondes
setInterval(nextSlide, 5000);

