// Smooth scroll with offset for fixed header and submenu
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const submenuHeight = document.querySelector('.submenu').offsetHeight;
    const totalOffset = headerHeight + submenuHeight + 20; // Additional padding

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - totalOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Add event listeners to navigation links
document.querySelectorAll('.menu a, .submenu a, .hero-text button').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') ? this.getAttribute('href').substring(1) : this.getAttribute('onclick').match(/'([^']+)'/)[1];
        scrollToSection(targetId);
    });
});
