// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            
            // Marcar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Marcar página actual como activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Galería de fotos
function initGallery() {
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementById('galleryClose');
    
    if (!galleryModal) return;

    document.querySelectorAll('.photo-card').forEach(card => {
        card.addEventListener('click', () => {
            modalImage.src = card.dataset.src;
            galleryModal.classList.add('active');
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => galleryModal.classList.remove('active'));
    }

    galleryModal.addEventListener('click', event => {
        if (event.target === galleryModal) galleryModal.classList.remove('active');
    });
}

// Teclat virtual
function initKeyboard() {
    const keyMessages = {
        LOVE: '💚 Amor que compila amb cada línia que escribim junts.',
        TRUST: '🤝 Confiança en cada desplegament, fins i tot quan el build fallava.',
        GROW: '📈 Creixem junts com un projecte de codi obert etern.',
        LAUGH: '😄 Risades que són el millor debug de qualsevol dia difícil.',
        SHIFT: '⇧ Suport constant, sempre empenyent vers endavant.',
        ADVENTURE: '✈️ Aventures noves en cada release de la nostra història.',
        CREATE: '🎨 Creem records que valen més que qualsevol funció nova.',
        CODE: '💻 Codifico el nostre amor en cada commit del cor.',
        SPACEBAR: '🚀 Junts som la millor versió del mateix equip.'
    };

    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', function() {
            const message = keyMessages[this.dataset.key] || 'Toca una altra tecla.';
            const display = document.getElementById('keyMessage');
            if (display) {
                display.textContent = message;
            }
            this.style.backgroundColor = '#4ade80';
            this.style.color = '#064e3b';
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 250);
        });
    });
}

// Verificar si el PDF existe
function checkPDF() {
    const pdfFrame = document.getElementById('pdfFrame');
    if (pdfFrame) {
        fetch('assets/spa_voucher.pdf', { method: 'HEAD' }).then(response => {
            if (!response.ok) {
                pdfFrame.style.display = 'none';
                const error = document.getElementById('pdfError');
                if (error) error.style.display = 'block';
            }
        }).catch(() => {
            pdfFrame.style.display = 'none';
            const error = document.getElementById('pdfError');
            if (error) error.style.display = 'block';
        });
    }
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initKeyboard();
    checkPDF();
});
