// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar transparente no topo e com fundo quando rolar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        nav.style.backgroundColor = 'rgba(26, 26, 26, 0.7)';
    }
});

// Animação de entrada para elementos quando ficarem visíveis
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-item, .timeline-item').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Adiciona classe 'visible' que torna os elementos visíveis com animação
document.styleSheets[0].insertRule(`
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`, 0); 