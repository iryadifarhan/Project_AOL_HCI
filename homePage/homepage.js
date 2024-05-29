document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const body = document.body;

    let currentIndex = 0;

    // Function to move to specific slide
    const moveToSlide = (index) => {
        const slideWidth = slides[0].clientWidth;
        carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;

        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active-dot'));
        // Add active class to current dot
        dots[index].classList.add('active-dot');

        // Update body class to reflect current slide
        body.className = `slide-${index + 1}`;
        currentIndex = index;
    };

    // Initialize carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });

    // Set initial active dot
    dots[0].classList.add('active-dot');

    // Event listener for previous button
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Event listener for next button
    const nextBtn = document.querySelector(".next-btn");
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });
});