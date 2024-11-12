// about.js

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Apply the fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimations();
});