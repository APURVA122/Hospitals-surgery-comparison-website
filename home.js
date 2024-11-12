// home.js - JavaScript for interactions on the home page

document.addEventListener('DOMContentLoaded', function() {
    // Hero section "Compare Now" button hover effect
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('mouseover', function() {
        ctaButton.style.backgroundColor = '#0056b3';
        ctaButton.style.color = 'white';
    });

    ctaButton.addEventListener('mouseout', function() {
        ctaButton.style.backgroundColor = '#fff';
        ctaButton.style.color = '#007BFF';
    });
});