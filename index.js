document.addEventListener('DOMContentLoaded', () => {
    
    // --- HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate Hamburger
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- SCROLL ANIMATIONS (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- TESTIMONIAL CAROUSEL ---
    let slideIndex = 0;
    const slides = document.getElementsByClassName("testimonial-slide");
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        
        // Show current slide
        slides[slideIndex].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        showSlides(++slideIndex);
    });

    prevBtn.addEventListener('click', () => {
        showSlides(--slideIndex);
    });

    // --- TYPING EFFECT FOR HERO ---
    // Simple logic to add blinking cursor feel via CSS is handled, 
    // but if you want dynamic text replacement:
    const heroTitle = document.querySelector('.glitch-text');
    // Optional: Add more glitch logic here if needed
});