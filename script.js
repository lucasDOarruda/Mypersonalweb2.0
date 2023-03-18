const sections = document.querySelectorAll('.fade-in');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});
sections.forEach(section => {
    sectionObserver.observe(section);
});



