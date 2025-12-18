/**
 * ANIMATIONS.js - The Visual Magic
 * Handles entry animations, hover effects, and scroll triggers.
 */

const animations = {
    // 1. GLOBAL SETTINGS
    defaultEase: "power3.out",

    // 2. PAGE TRANSITIONS
    // This runs every time a new page is loaded in ui.js
    pageTransition(element) {
        gsap.fromTo(element, 
            { opacity: 0, y: 20 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: this.defaultEase,
                stagger: 0.1 
            }
        );
    },

    // 3. HERO SECTION ANIMATION
    // Specifically for the Home page greeting
    animateHero() {
        const tl = gsap.timeline();
        tl.from(".glitch-text", { 
            duration: 1, 
            opacity: 0, 
            scale: 0.9, 
            ease: "back.out(1.7)" 
        })
        .from(".hero p", { 
            duration: 0.8, 
            opacity: 0, 
            y: 20 
        }, "-=0.5")
        .from(".hero-cta button", { 
            duration: 0.5, 
            opacity: 0, 
            x: -20, 
            stagger: 0.2 
        }, "-=0.3");
    },

    // 4. MICRO-INTERACTIONS
    // Hover glow and scale for cards
    initCardHover() {
        const cards = document.querySelectorAll('.glass-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { 
                    scale: 1.03, 
                    duration: 0.3, 
                    borderColor: 'rgba(88, 150, 255, 0.5)',
                    boxShadow: '0 0 20px rgba(88, 150, 255, 0.2)'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { 
                    scale: 1, 
                    duration: 0.3, 
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none'
                });
            });
        });
    },

    // 5. NAVIGATION REVEAL
    // Animates the header on first load
    revealNav() {
        gsap.from("#main-nav", {
            y: -100,
            duration: 1,
            ease: "expo.out"
        });
    },

    // 6. SCROLL OBSERVER (Modern alternative to scroll events)
    // Triggers animations when elements enter the viewport
    initScrollReveal() {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.pageTransition(entry.target);
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.page-section').forEach(section => {
            observer.observe(section);
        });
    }
};

// Integration with UI.js
// We hook into the window load to start initial animations
window.addEventListener('load', () => {
    animations.revealNav();
    animations.initScrollReveal();
});