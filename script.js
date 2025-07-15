// Cursor Personalizado
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    });
}

// Indicador de Progresso da Página
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollIndicator.style.width = `${progress}%`;
});

// Alternar Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar o menu ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Alternar Modo Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Envio do Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;

    alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    contactForm.reset();
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Observer para animações ao aparecer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar seções e cartões de projeto
document.querySelectorAll('section > div > div:first-child').forEach(el => {
    observer.observe(el);
});
document.querySelectorAll('.project-card').forEach(el => {
    observer.observe(el);
});
