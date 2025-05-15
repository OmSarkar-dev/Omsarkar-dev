// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Toggle mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
        
        if (navbar.classList.contains('active')) {
            menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '0';
            menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'none';
            menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
            menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbar && navbar.classList.contains('active') && !e.target.closest('.navbar') && !e.target.closest('.menu-toggle')) {
        navbar.classList.remove('active');
        
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.remove('active'));
        
        menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'none';
        menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
        menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'none';
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Portfolio filter functionality
if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 200);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
}

// Animate background particles
const animateParticles = () => {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Random initial position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        particle.style.left = `${randomX}px`;
        particle.style.top = `${randomY}px`;
        
        // Random size
        const size = Math.random() * 100 + 30;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${index * 0.5}s`;
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateParticles();
    
    // Animate elements on page load
    const fadeInElements = document.querySelectorAll('.hero-content, .about, .portfolio-item, .download-card');
    
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Glitch effect for hero title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.classList.add('active');
            setTimeout(() => {
                glitchText.classList.remove('active');
            }, 200);
        }, 3000);
    }
});

// Add CSS for animations that were added via JavaScript
const style = document.createElement('style');
style.textContent = `
    .hero-content, .about, .portfolio-item, .download-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    @keyframes float-random {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(var(--random-x1), var(--random-y1));
        }
        50% {
            transform: translate(var(--random-x2), var(--random-y2));
        }
        75% {
            transform: translate(var(--random-x3), var(--random-y3));
        }
    }
`;
document.head.appendChild(style);