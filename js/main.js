// Main JavaScript file for LumiMerse website

// DOM Elements
const navbar = document.getElementById('navbar');
const stickyCTA = document.getElementById('stickyCTA');
const heroSection = document.querySelector('.hero');
const revealElements = document.querySelectorAll('.reveal');

// State
let lastScrollY = 0;
let heroHeight = heroSection ? heroSection.offsetHeight : 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeroVideo();
    initScrollReveal();
    initializeNavigation();
    initializeAnimations();
    initializeVideoFallback();
    initializeMobileMenu();
});

// Navigation Functions
function initializeNavigation() {
    // Update active nav on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Update active nav on click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function handleScroll() {
    const scrollY = window.scrollY;
    
    // Navbar styling
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Sticky CTA visibility
    if (stickyCTA) {
        if (scrollY > heroHeight && scrollY > lastScrollY) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.remove('visible');
        }
    }
    
    lastScrollY = scrollY;
    updateActiveNav();
    
    // Parallax effect
    if (scrollY < window.innerHeight) {
        const overlay = document.querySelector('.hero-overlay');
        if (overlay) {
            overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    }
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Animation Functions
function initializeAnimations() {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // Initial check
    handleScroll();
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

// Hero Video Initialization
function initHeroVideo() {
    const video = document.querySelector('.hero-video');
    if (video) {
        // Ensure video loads and plays
        video.load();
        
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video is playing successfully');
            }).catch(error => {
                console.log('Video autoplay failed:', error);
                // Show fallback image if autoplay fails
                handleVideoError();
            });
        }
        
        // Handle video loading errors
        video.addEventListener('error', function(e) {
            console.log('Video loading error:', e);
            handleVideoError();
        });
        
        // Handle when video data is loaded
        video.addEventListener('loadeddata', function() {
            console.log('Video data loaded successfully');
        });
        
        // Handle when video can start playing
        video.addEventListener('canplay', function() {
            console.log('Video can start playing');
        });
    }
}

// Video Fallback
function initializeVideoFallback() {
    const video = document.querySelector('.hero-video');
    if (video) {
        video.addEventListener('error', function() {
            handleVideoError();
        });
    }
}

function handleVideoError() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
        
        const fallback = document.createElement('div');
        fallback.className = 'video-fallback';
        fallback.innerHTML = '🤖';
        hero.appendChild(fallback);
    }
}

// Mobile Menu
function initializeMobileMenu() {
    window.toggleMenu = toggleMenu;
    window.closeMobileMenu = closeMobileMenu;
}

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const spans = mobileMenu.querySelectorAll('span');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        
        createMobileNav();
    } else {
        closeMobileMenu();
    }
}

function createMobileNav() {
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav-active';
    mobileNav.innerHTML = `
        <a href="#home" onclick="closeMobileMenu()">Home</a>
        <a href="#projects" onclick="closeMobileMenu()">Projects</a>
        <a href="#platform" onclick="closeMobileMenu()">Platform</a>
        <a href="#pricing" onclick="closeMobileMenu()">Pricing</a>
        <a href="#contact" onclick="closeMobileMenu()">Contact</a>
    `;
    
    // Style the mobile nav
    Object.assign(mobileNav.style, {
        position: 'fixed',
        top: '64px',
        left: '0',
        right: '0',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        padding: 'var(--space-md)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        zIndex: '999'
    });
    
    // Style the links
    mobileNav.querySelectorAll('a').forEach(link => {
        Object.assign(link.style, {
            color: 'var(--dark-gray)',
            textDecoration: 'none',
            padding: 'var(--space-sm) 0',
            fontWeight: 'var(--font-weight-medium)'
        });
    });
    
    document.querySelector('nav').appendChild(mobileNav);
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const spans = mobileMenu.querySelectorAll('span');
    
    mobileMenu.classList.remove('active');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    
    const mobileNav = document.querySelector('.mobile-nav-active');
    if (mobileNav) {
        mobileNav.remove();
    }
}

// Utility Functions
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

// Optimize scroll performance
const optimizedScroll = debounce(handleScroll, 10);
window.addEventListener('scroll', optimizedScroll, { passive: true });