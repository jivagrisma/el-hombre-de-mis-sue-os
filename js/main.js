// Página Web El Hombre de mis Sueños - JavaScript
// Interacciones estilo Medium

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initSmoothScroll();
    initReadingProgress();
    initScrollEffects();
    initScrollAnimations();
    initTypewriterEffect();
    initParallaxEffect();
    
    console.log('🌙 El Hombre de mis Sueños - Página cargada');
});

/**
 * Navegación con scroll suave
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Remover clase active de todos los links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                // Agregar clase active al link clickeado
                this.classList.add('active');
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Barra de progreso de lectura
 */
function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress-fill');
    
    if (!progressBar) {
        console.warn('Barra de progreso no encontrada');
        return;
    }
    
    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollProgress = (window.scrollY / documentHeight) * 100;
        
        const progress = Math.min(Math.max(scrollProgress, 0), 100);
        progressBar.style.width = progress + '%';
        
        // Cambiar color según el progreso
        if (progress > 80) {
            progressBar.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
        } else if (progress > 50) {
            progressBar.style.background = 'linear-gradient(90deg, #FF9800, #4CAF50)';
        } else {
            progressBar.style.background = 'linear-gradient(90deg, var(--color-accent), #4CAF50)';
        }
    }
    
    // Throttle para mejor performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Inicializar
    updateProgress();
}

/**
 * Efectos de scroll en header y navegación
 */
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScrollY = window.scrollY;
    let headerVisible = true;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        // Ocultar/mostrar header basado en dirección del scroll
        if (currentScrollY > lastScrollY && currentScrollY > 150 && headerVisible) {
            // Scrolling down & past threshold
            header.style.transform = 'translateY(-100%)';
            headerVisible = false;
        } else if (currentScrollY < lastScrollY && !headerVisible) {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            headerVisible = true;
        }
        
        // Cambiar background del header basado en scroll
        if (currentScrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
        
        // Actualizar navegación activa basada en posición
        updateActiveNavigation();
        
        lastScrollY = currentScrollY;
    }
    
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id], article[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
                currentSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttle para mejor performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Inicializar
    updateHeader();
}

/**
 * Animaciones de entrada para elementos
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Agregar delay escalonado para múltiples párrafos
                const paragraphs = entry.target.querySelectorAll('p');
                paragraphs.forEach((paragraph, index) => {
                    setTimeout(() => {
                        paragraph.style.opacity = '1';
                        paragraph.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                // No observar más una vez visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones con clase fade-in
    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
        
        // Preparar párrafos para animación escalonada
        const paragraphs = section.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.style.opacity = '0';
            paragraph.style.transform = 'translateY(10px)';
            paragraph.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
    });
    
    // Animación especial para quotes
    const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
                quoteObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.quote-paragraph').forEach(quote => {
        quoteObserver.observe(quote);
    });
}

/**
 * Efecto typewriter para el título principal
 */
function initTypewriterEffect() {
    const title = document.querySelector('.article-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid var(--color-text-primary)';
    title.style.animation = 'blink 1s infinite';
    
    let i = 0;
    const speed = 80;
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Parpadeo del cursor por un tiempo
            setTimeout(() => {
                title.style.borderRight = 'none';
                title.style.animation = 'none';
                
                // Agregar animación de completado
                title.style.animation = 'titleComplete 0.5s ease forwards';
            }, 2000);
        }
    }
    
    // Iniciar efecto después de un delay
    setTimeout(typeWriter, 1000);
}

/**
 * Efecto parallax sutil para el contenido
 */
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.quote-paragraph, .emphasis-paragraph');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.02;
        
        parallaxElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                element.style.transform = `translateY(${rate * (index + 1)}px)`;
            }
        });
    }
    
    // Solo en desktop para mejor performance
    if (window.innerWidth > 768) {
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

/**
 * Funciones de utilidad
 */

// Throttle function para mejor performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Detectar si es dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Agregar event listeners para cambios de tamaño de ventana
window.addEventListener('resize', debounce(() => {
    // Reinicializar efectos si es necesario
    if (!isMobile() && window.parallaxInitialized !== true) {
        initParallaxEffect();
        window.parallaxInitialized = true;
    }
}, 250));

// Agregar CSS para animaciones personalizadas
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes blink {
        0%, 50% { border-color: var(--color-text-primary); }
        51%, 100% { border-color: transparent; }
    }
    
    @keyframes titleComplete {
        from { transform: scale(1); }
        50% { transform: scale(1.02); }
        to { transform: scale(1); }
    }
    
    /* Mejoras de performance */
    .fade-in {
        transform: translate3d(0, 0, 0);
    }
    
    .reading-progress-fill {
        transform: translate3d(0, 0, 0);
    }
    
    /* Estilos para elementos interactivos */
    .nav-link {
        position: relative;
        overflow: hidden;
    }
    
    .nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .nav-link:hover::before {
        left: 100%;
    }
    
    /* Animación para párrafos hover */
    .content-section p {
        position: relative;
    }
    
    .content-section p::before {
        content: '';
        position: absolute;
        left: -5px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--color-accent);
        transform: scaleY(0);
        transition: transform 0.3s ease;
        transform-origin: top;
    }
    
    .content-section p:hover::before {
        transform: scaleY(1);
    }
`;
document.head.appendChild(style);

// Mejorar accesibilidad
document.addEventListener('keydown', function(e) {
    // Navegación con teclado
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Agregar estilos para navegación por teclado
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--color-accent) !important;
        outline-offset: 2px !important;
        border-radius: 4px;
    }
`;
document.head.appendChild(keyboardStyle);

// Easter egg: mensaje en consola
console.log(`
    🌙✨ Bienvenido al país de los sueños ✨🌙
    
    "Los sueños son la última frontera donde lo sagrado 
    aún habita en nuestras vidas urbanas y rurales."
    
    - El Hombre de mis Sueños
`);