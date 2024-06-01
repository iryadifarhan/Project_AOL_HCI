document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track.satu");
    const slides = document.querySelectorAll(".carousel-slide.satu");
    const dots = document.querySelectorAll(".dot.satu");
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
    const prevBtn = document.querySelector(".prev-btn.satu");
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Event listener for next button
    const nextBtn = document.querySelector(".next-btn.satu");
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track.dua");
    const slides = document.querySelectorAll(".carousel-slide.dua");
    const dots = document.querySelectorAll(".dot.dua");
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
    const prevBtn = document.querySelector(".prev-btn.dua");
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Event listener for next button
    const nextBtn = document.querySelector(".next-btn.dua");
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track.tiga");
    const slides = document.querySelectorAll(".carousel-slide.tiga");
    const dots = document.querySelectorAll(".dot.tiga");
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
    const prevBtn = document.querySelector(".prev-btn.tiga");
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Event listener for next button
    const nextBtn = document.querySelector(".next-btn.tiga");
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });
});
