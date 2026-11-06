document.addEventListener("DOMContentLoaded", () => {
    
    /* =========================================
       1. LÓGICA DEL CURSOR PERSONALIZADO
       ========================================= */
    const cursor = document.getElementById('custom-cursor');
    const hoverTargets = document.querySelectorAll('.hover-target');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    /* =========================================
       2. LÓGICA DEL MENÚ DE NAVEGACIÓN FLOTANTE E INTERACTIVO
       ========================================= */
    const floatingNav = document.getElementById('floating-nav');
    const heroSection = document.getElementById('inicio');
    
    let isScrolledPastHero = false;
    let isMouseAtTop = false;

    // Detectamos si es versión Web o Móvil
    const isDesktop = () => window.innerWidth > 768;

    // Función centralizada para evaluar si el menú debe mostrarse o no
    function updateFloatingNav() {
        if (isDesktop()) {
            // VERSIÓN WEB: 
            // A partir de la sección 2 (pasando el hero), se oculta por defecto.
            // SOLO aparece si el ratón está en la parte superior (<= 120px)
            if (isScrolledPastHero) {
                if (isMouseAtTop) {
                    floatingNav.classList.add('visible');
                } else {
                    floatingNav.classList.remove('visible');
                }
            } else {
                // En la sección 1, se mantiene oculto porque ya está el menú principal
                floatingNav.classList.remove('visible');
            }
        } else {
            // VERSIÓN MÓVIL:
            // A partir de la sección 2, la hamburguesa se queda fija siempre.
            if (isScrolledPastHero) {
                floatingNav.classList.add('visible');
            } else {
                floatingNav.classList.remove('visible');
            }
        }
    }

    // Evaluamos cada vez que el usuario hace scroll
    window.addEventListener('scroll', () => {
        isScrolledPastHero = window.scrollY > heroSection.offsetHeight - 100;
        updateFloatingNav();
    });

    // Evaluamos cada vez que el usuario mueve el ratón (exclusivo para Web)
    document.addEventListener('mousemove', (e) => {
        isMouseAtTop = e.clientY <= 120;
        updateFloatingNav();
    });

    // Evita parpadeos si el usuario pasa el cursor directamente sobre el menú
    floatingNav.addEventListener('mouseenter', () => {
        isMouseAtTop = true;
        updateFloatingNav();
    });

    floatingNav.addEventListener('mouseleave', (e) => {
        isMouseAtTop = e.clientY <= 120;
        updateFloatingNav();
    });

    /* =========================================
       3. LÓGICA DEL MENÚ RESPONSIVO (HAMBURGUESA)
       ========================================= */
    function setupMobileMenu(hamburgerId, navLinksId) {
        const hamburger = document.getElementById(hamburgerId);
        const navLinks = document.getElementById(navLinksId);
        
        if (hamburger && navLinks) {
            const links = navLinks.querySelectorAll('a');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    setupMobileMenu('hamburger-main', 'nav-links-main');
    setupMobileMenu('hamburger-float', 'nav-links-float');

    /* =========================================
       4. LÓGICA DEL REPRODUCTOR SOUNDCLOUD API
       ========================================= */
    const scIframe = document.getElementById('sc-widget');
    const audioBtn = document.getElementById('audio-toggle-btn');
    const iconOn = document.getElementById('icon-speaker-on');
    const iconOff = document.getElementById('icon-speaker-off');
    
    const widget = SC.Widget(scIframe);
    let isPlaying = false;

    audioBtn.addEventListener('click', () => {
        if (isPlaying) {
            widget.pause();
        } else {
            widget.play();
        }
    });

    widget.bind(SC.Widget.Events.PLAY, () => {
        isPlaying = true;
        iconOff.style.display = 'none';
        iconOn.style.display = 'block';
    });

    widget.bind(SC.Widget.Events.PAUSE, () => {
        isPlaying = false;
        iconOn.style.display = 'none';
        iconOff.style.display = 'block';
    });

    /* =========================================
       5. GENERADOR DINÁMICO DE GLITCHES (HORIZONTAL + VERTICAL)
       ========================================= */
    function initGlitches() {
        const containers = document.querySelectorAll('.glitch-bg-container');
        const glitchColors = ['var(--geppaku)', 'var(--akane-iro)', 'var(--ai-iro)'];
        
        containers.forEach(container => {
            const blockCount = Math.floor(Math.random() * 20) + 20; 
            
            for(let i = 0; i < blockCount; i++) {
                let block = document.createElement('div');
                block.classList.add('glitch-block');
                
                // Mezcla: 50% de probabilidad de ser Horizontal y 50% Vertical
                const isVertical = Math.random() > 0.5;

                if (isVertical) {
                    // Elemento Vertical: Delgado y alto
                    block.style.width = (Math.random() * 5 + 1) + 'px';   
                    block.style.height = (Math.random() * 250 + 50) + 'px'; 
                } else {
                    // Elemento Horizontal: Ancho y corto
                    block.style.width = (Math.random() * 250 + 50) + 'px'; 
                    block.style.height = (Math.random() * 5 + 1) + 'px';   
                }
                
                // Posición esparcida aleatoriamente
                block.style.top = Math.random() * 100 + '%';
                block.style.left = Math.random() * 100 + '%';
                
                // Asignar color aleatorio
                block.style.backgroundColor = glitchColors[Math.floor(Math.random() * glitchColors.length)];
                
                // Tiempos de animación erráticos
                block.style.animationDuration = (Math.random() * 1.5 + 0.3) + 's';
                block.style.animationDelay = (Math.random() * 4) + 's';
                
                container.appendChild(block);
            }
        });
    }

    initGlitches();
});