/* =========================================
   VARIABLES DE LA PALETA OBLIGATORIA
   ========================================= */
:root {
    --shikkoku: #000000;      /* Negro puro (Fondo principal unificado) */
    --geppaku: #E5E1E6;       /* Blanco lunar (Textos) */
    --akane-iro: #B32632;     /* Rojo */
    --ai-iro: #075582;        /* Azul índigo */
    --tetsukon: #002B45;      /* Azul hierro */
    
    --cursor-color: var(--akane-iro);
}

/* =========================================
   RESET Y CONFIGURACIÓN BASE
   ========================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* Compensa la altura del menú fijo al hacer clic en enlaces */
}

body {
    font-family: 'Space Grotesk', sans-serif;
    color: var(--geppaku);
    background-color: var(--shikkoku);
    overflow-x: hidden;
}

/* =========================================
   CURSOR PERSONALIZADO
   ========================================= */
.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 35px;
    height: 35px;
    background-color: var(--cursor-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999; /* Nivel más alto para estar siempre arriba, incluso del menú */
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease, background-color 0.3s ease;
}

.custom-cursor.hover {
    transform: translate(-50%, -50%) scale(1.5);
}

/* =========================================
   FONDO GLITCH UNIVERSAL
   ========================================= */
.glitch-bg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0 !important;
    pointer-events: none;
}

.glitch-block {
    position: absolute;
    animation: glitch-flicker infinite linear alternate-reverse;
}

@keyframes glitch-flicker {
    0% { transform: translateY(0) scaleX(1); opacity: 0.1; }
    20% { transform: translateY(-3px) scaleX(1.05); opacity: 0.8; }
    40% { transform: translateY(3px) scaleX(0.95); opacity: 0.2; }
    60% { transform: translateY(0) scaleX(1); opacity: 0.6; }
    80% { transform: translateY(2px) scaleX(1.1); opacity: 0.3; }
    100% { transform: translateY(-2px) scaleX(1); opacity: 0.1; }
}

/* =========================================
   NAVBAR Y MENÚ (SIEMPRE ACCESIBLE)
   ========================================= */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 5rem;
    background-color: rgba(0, 0, 0, 0.85); /* Fondo oscuro semitransparente */
    backdrop-filter: blur(8px); /* Efecto cristalino */
    -webkit-backdrop-filter: blur(8px);
    z-index: 10000;
    border-bottom: 1px solid rgba(229, 225, 230, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.nav-links a {
    color: var(--geppaku);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--akane-iro);
}

/* =========================================
   SECCIÓN 1: INICIO Y LAYOUT DE LA MAQUETA
   ========================================= */
.section-inicio {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
}

.content-wrapper {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 3rem 5rem;
    justify-content: center;
}

.hero-container {
    margin-top: 80px;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 7.5rem);
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -2px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.6rem);
    font-style: italic;
    font-weight: 400;
    margin-bottom: 4rem;
}

.btn-primary {
    display: inline-block;
    color: var(--geppaku);
    border: 1px solid var(--geppaku);
    padding: 1rem 3.5rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: var(--akane-iro);
    border-color: var(--akane-iro);
}

/* =========================================
   SECCIÓN 2: ACERCA DE LA MADRIGUERA
   ========================================= */
.section-acerca {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku); /* Oscuro puro */
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.gears-bg-container {
    position: absolute;
    top: -10%;
    right: -5%;
    width: 60vw;
    max-width: 700px;
    height: 60vw;
    max-height: 700px;
    z-index: 1 !important;
    pointer-events: none;
    opacity: 0.8;
}

.gear {
    position: absolute;
    transform-origin: center;
}

.gear-large {
    width: 70%;
    height: 70%;
    top: 0;
    right: 15%;
    animation: spin-gear 40s linear infinite;
}

.gear-small {
    width: 45%;
    height: 45%;
    top: -5%;
    right: -5%;
    animation: spin-gear-reverse 25s linear infinite;
}

@keyframes spin-gear { 100% { transform: rotate(360deg); } }
@keyframes spin-gear-reverse { 100% { transform: rotate(-360deg); } }

.acerca-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1200px;
    margin: 0 !important;
    padding: 3rem 5rem !important;
}

.acerca-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 6vw, 6.5rem);
    font-weight: 700 !important;
    line-height: 0.9;
    letter-spacing: -2px;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: var(--geppaku);
    text-align: left;
}

.acerca-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
}

.acerca-text p {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(0.9rem, 1.2vw, 1.05rem);
    line-height: 1.5;
    letter-spacing: 0.3px;
    font-weight: 400 !important;
    color: var(--geppaku) !important;
    text-align: left;
}

.acerca-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
}

/* =========================================
   SECCIÓN 3: CATÁLOGO DE CURSOS
   ========================================= */
.section-cursos {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku); /* Oscuro puro */
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.cimagen-bg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('cimagen.png');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.25;
    z-index: 1 !important;
    pointer-events: none;
}

.cursos-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1200px;
    margin: 0 !important;
    padding: 4rem 5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 80vh;
}

.cursos-content-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
}

.cursos-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 700 !important;
    line-height: 0.95;
    letter-spacing: -1.5px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--geppaku);
    text-align: left;
}

.cursos-card {
    position: relative;
    background-color: transparent;
    padding: 1rem 0;
    width: 100%;
    max-width: 450px;
    overflow: hidden;
}

.code-icon {
    display: none;
}

.cursos-subtitle {
    position: relative;
    z-index: 1;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.4;
    font-weight: 400 !important;
    color: var(--geppaku) !important;
    text-align: left;
}

.cursos-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
}

.btn-small {
    padding: 0.8rem 3rem;
    font-size: 1rem;
    text-transform: lowercase;
}

/* =========================================
   SECCIÓN 4: LISTA DEL CATÁLOGO DE CURSOS
   ========================================= */
.section-catalogo-lista {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku); /* Oscuro puro */
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.catalogo-bg-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://kidsparkeducation.org/hs-fs/hubfs/Homepage%20-%20Alt%20Hero%202.png?width=800&height=658&name=Homepage%20-%20Alt%20Hero%202.png');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.35;
    z-index: 1 !important;
    pointer-events: none;
}

.catalogo-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1200px;
    margin: 0 !important;
    padding: 4rem 5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.catalogo-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700 !important;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    text-transform: uppercase;
    color: var(--geppaku);
    text-align: left;
}

.catalogo-nav {
    width: 100%;
}

.catalogo-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.catalogo-links li a {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1.5rem, 3.5vw, 2.5rem);
    font-weight: 700 !important;
    color: var(--geppaku) !important;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1.1;
    display: inline-block;
    transition: color 0.3s ease, transform 0.3s ease;
}

.catalogo-links li a:hover {
    color: var(--akane-iro) !important;
    transform: translateX(15px);
}

/* =========================================
   SECCIÓN 5 a 9: CATEGORÍAS
   ========================================= */
.section-robotica, .section-programacion, .section-electronica, .section-ia, .section-arte {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.robotica-bg-container { background-image: url('robotica.png'); background-position: right center; background-repeat: no-repeat; background-size: contain; opacity: 0.3; position: absolute; top: 0; right: 0; width: 100%; height: 100%; z-index: 1 !important; pointer-events: none; }
.programacion-bg-container { background-image: url('codigo.jpeg'); background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.25; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1 !important; pointer-events: none; }
.electronica-bg-container { background-image: url('electronicafondo.png'); background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.25; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1 !important; pointer-events: none; }
.ia-bg-container { background-image: url('ia.png'); background-position: right center; background-repeat: no-repeat; background-size: cover; opacity: 0.25; position: absolute; top: 0; right: 0; width: 100%; height: 100%; z-index: 1 !important; pointer-events: none; }
.arte-bg-container { background-image: url('iafondo.png'); background-position: right center; background-repeat: no-repeat; background-size: cover; opacity: 0.25; position: absolute; top: 0; right: 0; width: 100%; height: 100%; z-index: 1 !important; pointer-events: none; }

.robotica-wrapper, .programacion-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1300px;
    margin: 0 !important;
    padding: 3rem 5rem !important;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.robotica-main-content, .programacion-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.programacion-list {
    gap: 2.5rem;
    margin-top: 1rem;
    width: 100%;
}

.category-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700 !important;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: var(--geppaku);
    text-align: left;
}

/* TARJETAS DE CURSOS */
.course-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    max-width: 1000px;
}

.course-logo, .programacion-logo {
    width: 320px;
    height: 180px;
    flex-shrink: 0;
    overflow: hidden;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.course-logo img, .programacion-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.course-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
}

.course-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    font-weight: 400 !important;
    color: var(--geppaku);
    line-height: 1.1;
    text-transform: uppercase;
}

.course-subtitle {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(0.75rem, 1vw, 0.9rem);
    font-weight: 400 !important;
    color: var(--geppaku);
    opacity: 0.7;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.btn-registro {
    background-color: var(--geppaku);
    color: var(--shikkoku) !important;
    border: none;
    padding: 0.6rem 3.5rem;
    border-radius: 50px;
    font-family: 'Space Grotesk', sans-serif !important;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.btn-registro:hover {
    background-color: var(--akane-iro);
    color: var(--geppaku) !important;
}

.robotica-footer {
    margin-top: auto;
    padding-top: 3rem;
}

.robotica-footer p {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 0.9rem;
    color: var(--geppaku);
    opacity: 0.5;
}

/* =========================================
   SECCIÓN 10: COLABORADORES
   ========================================= */
.section-colaboradores {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.colabs-bg-left {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 250px;
    height: 350px;
    background-image: url('beto.jpg');
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1 !important;
    pointer-events: none;
    opacity: 0.85;
}

.colabs-bg-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url('colabsfondo.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1 !important;
    pointer-events: none;
    opacity: 0.4;
}

.colaboradores-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto !important;
    display: flex;
    justify-content: center;
    padding-left: 5vw;
}

.colabs-text-content {
    max-width: 600px;
    width: 100%;
}

.colabs-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700 !important;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 1.5rem;
    color: var(--geppaku);
    text-align: left;
}

.colabs-subtitle {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    line-height: 1.5;
    font-weight: 400 !important;
    color: var(--geppaku) !important;
    text-align: left;
}

/* =========================================
   SECCIÓN 11: PERFILES DE COLABORADORES
   ========================================= */
.section-perfiles {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.perfiles-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1700px;
    margin: 0 auto !important;
    padding: 0 5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3.5rem;
}

.perfiles-header { margin-bottom: 0; }
.perfiles-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700 !important;
    line-height: 1;
    letter-spacing: -1.5px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    color: var(--geppaku);
    text-align: left;
}

.perfiles-subtitle {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(0.9rem, 1.3vw, 1.2rem);
    line-height: 1.4;
    font-weight: 400 !important;
    color: var(--geppaku) !important;
    text-align: left;
    max-width: 800px;
}

.perfiles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6rem;
    width: 100%;
}

.perfil-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.perfil-flip-container {
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    perspective: 1000px;
    margin-bottom: 1rem;
}

.perfil-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
}

.perfil-card:hover .perfil-flip-inner { transform: rotateY(180deg); }
.perfil-flip-front, .perfil-flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}

.perfil-flip-front { background-color: var(--tetsukon); }
.perfil-flip-front img { width: 100%; height: 100%; object-fit: cover; display: block; }

.perfil-flip-back {
    background-color: var(--tetsukon);
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.social-icon {
    color: var(--geppaku);
    width: 45px;
    height: 45px;
    transition: color 0.3s ease, transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}
.social-icon:hover { color: var(--akane-iro) !important; transform: scale(1.15); }

.perfil-name {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1.1rem;
    font-weight: 700 !important;
    color: var(--geppaku);
    margin-bottom: 0.5rem;
    text-align: left;
}

.btn-ver-mas {
    padding: 0.4rem 1.5rem !important;
    font-size: 0.75rem !important;
    margin-top: 0;
    border-width: 1px !important;
}

/* =========================================
   SECCIONES 12 a 15: BIOS DE COLABORADORES
   ========================================= */
.section-bio {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.bio-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto !important;
    padding: 4rem 5rem !important;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.bio-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
}

.bio-text-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.bio-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 700 !important;
    color: var(--geppaku);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}

.bio-paragraphs p {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(0.9rem, 1.1vw, 1.05rem);
    line-height: 1.5;
    font-weight: 400 !important;
    color: var(--geppaku);
    text-align: justify;
    margin-bottom: 1.5rem;
}

.bio-social-links {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.bio-social-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: var(--geppaku);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    transition: color 0.3s ease;
}
.bio-social-links a:hover { color: var(--akane-iro); }
.bio-social-links svg { width: 28px; height: 28px; }

.bio-img-col {
    width: 100%;
    display: flex;
    justify-content: center;
}

.bio-img-col img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    background-color: var(--tetsukon);
}

.tiktok-gallery {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    overflow-x: auto;
}

/* =========================================
   SECCIÓN 16: ÚNETE A LA MADRIGUERA
   ========================================= */
.section-unete {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.unete-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto !important;
    padding: 6rem 5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
}

.unete-header { width: 100%; }

.unete-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 5vw, 5.5rem);
    font-weight: 700 !important;
    line-height: 1.05;
    letter-spacing: -2px;
    color: var(--geppaku);
    text-transform: uppercase;
    text-align: left;
}

.unete-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    width: 100%;
}

.unete-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 520px;
}

.unete-subtitle {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 700 !important;
    color: var(--geppaku);
    margin-bottom: 1.2rem;
    text-transform: uppercase;
}

.unete-text {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(0.9rem, 1.1vw, 1.1rem);
    line-height: 1.5;
    font-weight: 400 !important;
    color: var(--geppaku);
    margin-bottom: 2.5rem;
}

.btn-unete {
    display: inline-block;
    padding: 0.6rem 4.5rem !important;
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: 1rem !important;
    font-weight: 700;
    color: var(--geppaku);
    border: 1px solid var(--geppaku);
    border-radius: 50px;
    text-decoration: none;
    background-color: transparent;
    transition: all 0.3s ease;
}

.btn-unete:hover {
    background-color: var(--akane-iro);
    border-color: var(--akane-iro);
    color: var(--geppaku);
}

/* =========================================
   SECCIONES 17 Y 18: FORMULARIOS
   ========================================= */
.section-formulario {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--shikkoku);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.form-wrapper {
    position: relative;
    z-index: 999 !important;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto !important;
    padding: 6rem 5rem !important;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: stretch;
}

/* CAJA ROJA CON TÍTULO */
.form-banner {
    background-color: var(--akane-iro);
    padding: 4rem 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 400px;
}

.form-title {
    font-family: 'Space Grotesk', sans-serif !important;
    font-size: clamp(2.5rem, 4.5vw, 4.5rem);
    font-weight: 700 !important;
    color: var(--geppaku);
    line-height: 1.1;
    letter-spacing: -1px;
    text-transform: uppercase;
    text-align: left;
}

/* CAMPOS DEL FORMULARIO */
.form-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.custom-form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.custom-form input,
.custom-form textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--geppaku);
    color: var(--geppaku);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    outline: none;
    transition: border-color 0.3s ease;
    resize: vertical;
}

.custom-form input:focus,
.custom-form textarea:focus {
    border-bottom-color: var(--akane-iro);
}

.custom-form input::placeholder,
.custom-form textarea::placeholder {
    color: var(--geppaku);
    opacity: 0.9;
}

.custom-form button {
    align-self: flex-start;
    margin-top: 1rem;
    background-color: transparent;
    cursor: none;
}


/* =========================================
   MEDIA QUERIES GLOBALES (MÓVILES Y TABLETS)
   ========================================= */
@media (max-width: 1024px) {
    .navbar {
        padding: 1.2rem 2rem;
    }
    .perfiles-grid { 
        grid-template-columns: repeat(2, 1fr); 
        gap: 4rem; 
    }
    .bio-grid { 
        grid-template-columns: 1fr; 
        gap: 2rem; 
    }
    .unete-grid { 
        grid-template-columns: 1fr; 
        gap: 4rem; 
    }
    .unete-card { 
        max-width: 100%; 
    }
    .form-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    #form-marca .form-grid {
        display: flex;
        flex-direction: column-reverse;
    }
    .form-banner {
        min-height: auto;
        padding: 3rem 2rem;
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 1rem;
    }
    .nav-links {
        gap: 1rem;
        flex-wrap: nowrap; 
    }
    .nav-links a {
        font-size: 0.75rem;
    }
    
    /* Control unificado de paddings para que no tapen al menú fijo */
    .content-wrapper,
    .acerca-wrapper,
    .cursos-wrapper,
    .catalogo-wrapper,
    .robotica-wrapper,
    .programacion-wrapper,
    .colaboradores-wrapper,
    .perfiles-wrapper,
    .bio-wrapper,
    .unete-wrapper,
    .form-wrapper {
        padding: 6rem 1.5rem 3rem 1.5rem !important; 
    }

    /* Convertimos las tarjetas de curso horizontales a verticales */
    .course-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;
    }
    .course-logo, .programacion-logo {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
    }
    
    .section-perfiles { 
        padding-top: 5rem; 
    }
    .perfiles-grid { 
        grid-template-columns: 1fr; 
        gap: 3rem;
    }
    
    .gears-bg-container {
        width: 100vw;
        height: 100vw;
        right: -20%;
    }
}