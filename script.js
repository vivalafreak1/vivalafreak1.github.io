// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const toggleMenuBtn = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');

toggleMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});