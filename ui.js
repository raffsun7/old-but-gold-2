/**
 * UI.js - The Brain of the SPA
 * Handles Routing, Rendering, and Interaction logic.
 */

const ui = {
    // 1. SELECTORS
    app: document.getElementById('app'),
    navLinks: document.querySelectorAll('.nav-link'),
    menuToggle: document.getElementById('menu-toggle'),

    // 2. INITIALIZATION
    init() {
        this.bindEvents();
        // Check for hash or load home
        const initialPage = window.location.hash.replace('#', '') || 'home';
        this.navigateTo(initialPage);
    },

    // 3. EVENT BINDING
    bindEvents() {
        // Navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link, .logo-link');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
            }
        });

        // Mobile Menu Toggle
        this.menuToggle.addEventListener('click', () => {
            document.querySelector('.desktop-menu').classList.toggle('active');
            this.menuToggle.classList.toggle('open');
        });
    },

    // 4. ROUTER: NAVIGATE TO PAGE
    navigateTo(pageId) {
        // Update URL hash without reload
        window.location.hash = pageId;

        // Visual feedback
        this.updateActiveLink(pageId);

        // Render content with animation
        this.app.style.opacity = '0';
        this.app.style.transform = 'translateY(10px)';

        setTimeout(() => {
            this.renderPage(pageId);
            this.app.style.opacity = '1';
            this.app.style.transform = 'translateY(0)';
            window.scrollTo(0, 0);
        }, 300);
    },

    // 5. RENDERER: GENERATE HTML
    renderPage(pageId) {
        let html = '';

        switch (pageId) {
            case 'home':
                html = this.templates.home();
                break;
            case 'gallery':
                html = this.templates.gallery();
                break;
            case 'skills':
                html = this.templates.skills();
                break;
            case 'blogs':
                html = this.templates.blogs();
                break;
            case 'contact':
                html = this.templates.contact();
                break;
            default:
                html = `<section class="error"><h1>404</h1><p>Page not found.</p></section>`;
        }

        this.app.innerHTML = html;
        
        // Post-render logic (init player if on blogs)
        if (pageId === 'blogs') this.initMusicPlayer();
    },

    // 6. TEMPLATES: HTML GENERATORS
    templates: {
        home() {
            return `
                <section class="hero fade-in">
                    <div class="hero-content">
                        <h3>Hi there, I am</h3>
                        <h1 class="glitch-text">Raffsun Zany</h1>
                        <p>Designer. Self-taught Developer. Creative Thinker.</p>
                        <div class="hero-cta">
                            <button class="nav-link primary-btn" data-page="skills">View My Skills</button>
                            <button class="nav-link secondary-btn" data-page="contact">Let's Talk</button>
                        </div>
                    </div>
                </section>
            `;
        },

        skills() {
            const skillCards = portfolioData.skills.map(s => `
                <div class="glass-card skill-card">
                    <i class="${s.icon}"></i>
                    <h3>${s.name}</h3>
                    <span class="badge">${s.level}</span>
                </div>
            `).join('');

            return `
                <section class="page-section">
                    <h2 class="section-title">Professional Skills</h2>
                    <div class="grid-layout">
                        ${skillCards}
                    </div>
                </section>
            `;
        },

        gallery() {
            const favBooks = portfolioData.books.favourites.map(b => `
                <div class="glass-card book-card">
                    <img src="${b.image}" alt="${b.title}">
                    <div class="book-info">
                        <h3>${b.title}</h3>
                        <p>${b.description}</p>
                    </div>
                </div>
            `).join('');

            return `
                <section class="page-section">
                    <h2 class="section-title">My Bookshelf</h2>
                    <div class="grid-layout">
                        ${favBooks}
                    </div>
                </section>
            `;
        },

        blogs() {
            return `
                <section class="page-section">
                    <h2 class="section-title">Music & Reflection</h2>
                    <div class="music-player-container glass-card">
                        <div class="track-info">
                            <div class="track-art" id="player-art"></div>
                            <h3 id="player-name">Track Name</h3>
                            <p id="player-artist">Artist</p>
                        </div>
                        <div class="player-controls">
                            <button onclick="ui.musicPlayer.prev()"><i class="fas fa-step-backward"></i></button>
                            <button id="play-pause" onclick="ui.musicPlayer.toggle()"><i class="fas fa-play"></i></button>
                            <button onclick="ui.musicPlayer.next()"><i class="fas fa-step-forward"></i></button>
                        </div>
                    </div>
                </section>
            `;
        },

        contact() {
            return `
                <section class="page-section">
                    <h2 class="section-title">Get In Touch</h2>
                    <div class="glass-card contact-container">
                        <form id="contact-form" action="https://formsubmit.co/your-email" method="POST">
                            <input type="text" placeholder="Your Name" required>
                            <input type="email" placeholder="Your Email" required>
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit" class="primary-btn">Send Message</button>
                        </form>
                    </div>
                </section>
            `;
        }
    },

    // 7. MUSIC PLAYER LOGIC
    musicPlayer: {
        currentIndex: 0,
        isPlaying: false,
        audio: new Audio(),
        
        load() {
            const track = portfolioData.music[this.currentIndex];
            this.audio.src = track.url;
            document.getElementById('player-name').innerText = track.name;
            document.getElementById('player-artist').innerText = track.artist;
            document.getElementById('player-art').style.backgroundImage = `url(${track.image})`;
        },
        toggle() {
            if (this.isPlaying) {
                this.audio.pause();
                document.getElementById('play-pause').innerHTML = '<i class="fas fa-play"></i>';
            } else {
                this.audio.play();
                document.getElementById('play-pause').innerHTML = '<i class="fas fa-pause"></i>';
            }
            this.isPlaying = !this.isPlaying;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % portfolioData.music.length;
            this.load();
            if (this.isPlaying) this.audio.play();
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + portfolioData.music.length) % portfolioData.music.length;
            this.load();
            if (this.isPlaying) this.audio.play();
        }
    },

    initMusicPlayer() {
        this.musicPlayer.load();
    },

    // 8. HELPERS
    updateActiveLink(pageId) {
        this.navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-page') === pageId);
        });
    }
};

// Start the UI
ui.init();