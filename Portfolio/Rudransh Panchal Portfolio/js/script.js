// ========== Menu Icon Navbar ========== //
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// ========== Dark Mode Toggle ========== //
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun'); // Switch icon (e.g., moon to sun)
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
});

// ========== Scroll Behavior ========== //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove active menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Scroll Sections Active Link
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
});

// ========== Scroll Reveal Animations ========== //
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content img', { origin: 'right' });
