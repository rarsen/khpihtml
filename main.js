// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const body = document.body;

    // Set default theme if none is set
    if (!body.classList.contains('light-theme') && !body.classList.contains('dark-theme')) {
        body.classList.add('light-theme');
    }

    lightThemeBtn.addEventListener('click', function() {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    });

    darkThemeBtn.addEventListener('click', function() {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    });
});

// Slideshow
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
