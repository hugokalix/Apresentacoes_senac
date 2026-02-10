document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.getElementById('slide-counter');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function P/ Atualizar o Slide.

    function updateSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');

        counter.textContent = `${index + 1} / ${totalSlides}`;

        prevBtn.style.opacity = index === 0 ? '0.5' : '1';
        nextBtn.style.opacity = index === totalSlides - 1 ? '0.5' : '1';
    }

    // Navega Para o Próximo.

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide(currentSlide);
        }
    }

    // Navegar Para o Anterior.

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    updateSlide(currentSlide);

});