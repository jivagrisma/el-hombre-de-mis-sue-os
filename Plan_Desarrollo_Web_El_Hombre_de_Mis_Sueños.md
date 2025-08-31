# PLAN DE DESARROLLO WEB - "EL HOMBRE DE MIS SUEÑOS"
## Página Web Minimalista Estilo Medium

---

## ANÁLISIS DEL DISEÑO MEDIUM.COM

### Características principales a replicar:
- **Tipografía:** Serif elegante para títulos, sans-serif para cuerpo
- **Espaciado:** Mucho espacio en blanco, márgenes amplios
- **Ancho máximo:** ~700px para contenido de texto
- **Colores:** Paleta minimalista (negro, gris, blanco)
- **Navegación:** Limpia y discreta
- **Responsive:** Mobile-first approach
- **Animaciones:** Sutiles y funcionales

---

## ESTRUCTURA DEL PROYECTO

```
proyecto/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   └── main.js
├── assets/
│   └── fonts/
└── README.md
```

---

## PASO 1: CONFIGURACIÓN INICIAL Y HTML SEMÁNTICO

### 1.1 Crear index.html con estructura semántica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Hombre de mis Sueños - Jorge Iván</title>
    
    <!-- Meta tags para SEO -->
    <meta name="description" content="Una exploración profunda sobre la interpretación de sueños y la sanación transgeneracional">
    <meta name="keywords" content="sueños, psicoanálisis, genealogía, Jung, interpretación onírica">
    <meta name="author" content="Jorge Iván">
    
    <!-- Open Graph para redes sociales -->
    <meta property="og:title" content="El Hombre de mis Sueños">
    <meta property="og:description" content="Una exploración sobre sueños y sanación familiar">
    <meta property="og:type" content="article">
    
    <!-- Preconectar con Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Estructura del contenido aquí -->
</body>
</html>
```

### 1.2 Estructura semántica del contenido

```html
<body>
    <header class="site-header">
        <nav class="navigation">
            <div class="nav-container">
                <h1 class="site-title">El Hombre de mis Sueños</h1>
                <div class="nav-links">
                    <a href="#inicio" class="nav-link active">Introducción</a>
                    <a href="#sobre" class="nav-link">Sobre el Autor</a>
                </div>
            </div>
        </nav>
    </header>

    <main class="main-content">
        <article class="article-container">
            <header class="article-header">
                <h1 class="article-title">El Hombre de mis Sueños</h1>
                <h2 class="article-subtitle">Introducción</h2>
                <div class="article-meta">
                    <span class="author">Jorge Iván</span>
                    <span class="date">Agosto 2025</span>
                    <span class="location">Andes, Antioquia</span>
                </div>
            </header>

            <div class="article-content">
                <!-- Secciones del contenido -->
                <section class="content-section">
                    <!-- Párrafos del contenido aquí -->
                </section>
            </div>
        </article>
    </main>

    <footer class="site-footer">
        <div class="footer-content">
            <p>&copy; 2025 Jorge Iván. Todos los derechos reservados.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
```

---

## PASO 2: CSS BASE - TIPOGRAFÍA Y LAYOUT

### 2.1 Crear css/styles.css con variables CSS

```css
:root {
    /* Colores estilo Medium */
    --color-text-primary: #242424;
    --color-text-secondary: #6B6B6B;
    --color-text-light: #8B8B8B;
    --color-background: #FFFFFF;
    --color-border: #E6E6E6;
    --color-accent: #1A8917;
    --color-hover: #F7F7F7;
    
    /* Tipografía */
    --font-serif: 'Georgia', 'Times New Roman', serif;
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    
    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 4rem;
    
    /* Anchos */
    --max-width-content: 700px;
    --max-width-wide: 1200px;
    
    /* Transiciones */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
}

/* Reset y base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    font-size: 18px;
    line-height: 1.6;
    color: var(--color-text-primary);
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

### 2.2 Tipografía estilo Medium

```css
/* Tipografía */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
}

.article-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    line-height: 1.1;
}

.article-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xl);
}

.content-section h2 {
    font-size: 1.8rem;
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
}

p {
    font-family: var(--font-serif);
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);
}

/* Párrafos especiales */
.quote-paragraph {
    font-style: italic;
    font-size: 1.25rem;
    line-height: 1.7;
    margin: var(--spacing-xl) 0;
    padding-left: var(--spacing-lg);
    border-left: 3px solid var(--color-accent);
    color: var(--color-text-secondary);
}

.emphasis-paragraph {
    font-weight: 600;
    font-size: 1.2rem;
}
```

---

## PASO 3: LAYOUT Y NAVEGACIÓN

### 3.1 Header y navegación

```css
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    z-index: 1000;
    transition: var(--transition-normal);
}

.nav-container {
    max-width: var(--max-width-wide);
    margin: 0 auto;
    padding: var(--spacing-md) var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-title {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: var(--spacing-lg);
}

.nav-link {
    text-decoration: none;
    color: var(--color-text-secondary);
    font-weight: 500;
    transition: var(--transition-fast);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 20px;
}

.nav-link:hover,
.nav-link.active {
    color: var(--color-text-primary);
    background-color: var(--color-hover);
}
```

### 3.2 Contenido principal

```css
.main-content {
    margin-top: 80px; /* Altura del header fijo */
    min-height: calc(100vh - 80px);
}

.article-container {
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding: var(--spacing-xxl) var(--spacing-lg);
}

.article-header {
    text-align: center;
    margin-bottom: var(--spacing-xxl);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--spacing-xl);
}

.article-meta {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    color: var(--color-text-light);
    font-size: 0.9rem;
    margin-top: var(--spacing-lg);
}

.article-meta span:not(:last-child)::after {
    content: "·";
    margin-left: var(--spacing-md);
    color: var(--color-text-light);
}
```

---

## PASO 4: RESPONSIVE DESIGN

### 4.1 Crear css/responsive.css

```css
/* Tablets */
@media (max-width: 768px) {
    :root {
        --spacing-xxl: 2.5rem;
        --spacing-xl: 2rem;
    }
    
    .article-title {
        font-size: 2rem;
    }
    
    .article-subtitle {
        font-size: 1.3rem;
    }
    
    .nav-container {
        padding: var(--spacing-sm) var(--spacing-md);
    }
    
    .site-title {
        font-size: 1.3rem;
    }
    
    .nav-links {
        gap: var(--spacing-md);
    }
    
    .article-meta {
        flex-direction: column;
        gap: var(--spacing-xs);
    }
    
    .article-meta span:not(:last-child)::after {
        display: none;
    }
}

/* Móviles */
@media (max-width: 480px) {
    body {
        font-size: 16px;
    }
    
    .article-container {
        padding: var(--spacing-xl) var(--spacing-md);
    }
    
    .article-title {
        font-size: 1.8rem;
    }
    
    p {
        font-size: 1rem;
        line-height: 1.7;
    }
    
    .quote-paragraph {
        font-size: 1.1rem;
        padding-left: var(--spacing-md);
        margin: var(--spacing-lg) 0;
    }
    
    .nav-links {
        display: none; /* Ocultar en móvil muy pequeño */
    }
}
```

---

## PASO 5: INTERACCIONES CON JAVASCRIPT

### 5.1 Crear js/main.js

```javascript
// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initReadingProgress();
    initScrollEffects();
    initTypewriterEffect();
});

// Scroll suave para navegación
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Barra de progreso de lectura
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    const progressFill = document.querySelector('.reading-progress-fill');
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollProgress = (window.scrollY / documentHeight) * 100;
        
        progressFill.style.width = Math.min(scrollProgress, 100) + '%';
    });
}

// Efectos de scroll en header
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Ocultar/mostrar header en scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Cambiar opacidad del header
        if (currentScrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Efecto typewriter para el título principal
function initTypewriterEffect() {
    const title = document.querySelector('.article-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid var(--color-text-primary)';
    
    let i = 0;
    const speed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Parpadeo del cursor por un tiempo
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Iniciar efecto después de un pequeño delay
    setTimeout(typeWriter, 500);
}
```

### 5.2 CSS adicional para JavaScript

```css
/* Barra de progreso de lectura */
.reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--color-border);
    z-index: 1001;
}

.reading-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--color-accent), #4CAF50);
    transition: width 0.3s ease;
    width: 0%;
}

/* Transiciones del header */
.site-header {
    transition: transform 0.3s ease, background-color 0.3s ease;
}

/* Animaciones de entrada */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Efecto hover en párrafos */
p {
    transition: var(--transition-fast);
}

p:hover {
    color: var(--color-text-primary);
    transform: translateX(5px);
}
```

---

## PASO 6: OPTIMIZACIONES Y PERFORMANCE

### 6.1 Optimizaciones CSS

```css
/* Optimizaciones de performance */
* {
    will-change: auto;
}

.site-header {
    will-change: transform;
}

.reading-progress-fill {
    will-change: width;
}

/* Lazy loading para imágenes futuras */
img {
    loading: lazy;
    height: auto;
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* Focus states para accesibilidad */
.nav-link:focus,
button:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
```

### 6.2 Meta tags adicionales en HTML

```html
<!-- En el <head> -->
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#1A8917">
<link rel="canonical" href="https://tudominio.com/el-hombre-de-mis-suenos">

<!-- Structured Data para SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El Hombre de mis Sueños",
  "author": {
    "@type": "Person",
    "name": "Jorge Iván"
  },
  "datePublished": "2025-08-31",
  "description": "Una exploración profunda sobre la interpretación de sueños y la sanación transgeneracional"
}
</script>
```

---

## PASO 7: IMPLEMENTACIÓN DEL CONTENIDO

### 7.1 Estructura HTML del contenido

```html
<div class="article-content">
    <section class="content-section fade-in">
        <p class="emphasis-paragraph">
            Una mañana desperté con una idea atravesada entre mis dos cejas:
        </p>
        
        <p>
            Durante gran parte de mi vida deseé acceder al conocimiento que habitan los sueños...
        </p>
        
        <!-- Continuar con todos los párrafos -->
    </section>
    
    <section class="content-section fade-in">
        <p class="quote-paragraph">
            Mi familia es un mapa de Colombia dibujado con cicatrices.
        </p>
        
        <!-- Continuar con la sección familiar -->
    </section>
    
    <!-- Más secciones según el contenido -->
</div>
```

### 7.2 JavaScript para animaciones de entrada

```javascript
// Observador de intersección para animaciones
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
}
```

---

## PASO 8: TESTING Y DESPLIEGUE

### 8.1 Checklist de testing
- [ ] Responsive en dispositivos móviles (320px - 768px)
- [ ] Responsive en tablets (768px - 1024px)  
- [ ] Responsive en desktop (1024px+)
- [ ] Velocidad de carga optimizada
- [ ] Accesibilidad (WCAG 2.1 AA)
- [ ] SEO básico implementado
- [ ] Compatibilidad cross-browser
- [ ] JavaScript funcional sin errores

### 8.2 Herramientas de testing recomendadas
- **Lighthouse** para performance y SEO
- **Wave** para accesibilidad  
- **BrowserStack** para cross-browser testing
- **PageSpeed Insights** para velocidad

### 8.3 Opciones de despliegue
- **Netlify** (recomendado para sitios estáticos)
- **Vercel** 
- **GitHub Pages**
- **Firebase Hosting**

---

## ESTRUCTURA FINAL DE ARCHIVOS

```
el-hombre-de-mis-suenos/
├── index.html                 (Contenido principal)
├── css/
│   ├── styles.css            (Estilos base)
│   └── responsive.css        (Media queries)
├── js/
│   └── main.js              (Interacciones)
├── assets/
│   └── favicon.ico
└── README.md                (Documentación)
```

---

## TIEMPO ESTIMADO DE DESARROLLO

- **Configuración inicial y HTML:** 2-3 horas
- **CSS y diseño:** 4-5 horas  
- **JavaScript e interacciones:** 2-3 horas
- **Responsive y optimización:** 2-3 horas
- **Testing y ajustes:** 1-2 horas
- **Total:** 11-16 horas

---

## PRÓXIMOS PASOS RECOMENDADOS

1. Implementar sistema de comentarios
2. Añadir funcionalidad de compartir en redes sociales
3. Crear versión dark mode
4. Implementar PWA (Progressive Web App)
5. Añadir analytics (Google Analytics)
6. Implementar sistema de suscripción newsletter

Este plan proporciona una base sólida para crear una página web profesional estilo Medium que presentará de manera elegante el contenido de "El Hombre de mis Sueños".