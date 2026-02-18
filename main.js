/* ============================================
   NexWeb TT — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Dark Mode Toggle ---
    const darkToggle = document.getElementById('darkToggle');

    // Restore saved preference
    if (localStorage.getItem('nexweb-dark') === 'true') {
        document.documentElement.classList.add('dark');
    }

    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('nexweb-dark', isDark);
        });
    }

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const formConfirmation = document.getElementById('formConfirmation');

    if (contactForm && formConfirmation) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation
            const name = contactForm.querySelector('#name');
            const email = contactForm.querySelector('#email');
            const details = contactForm.querySelector('#details');

            if (!name.value.trim() || !email.value.trim() || !details.value.trim()) {
                // Highlight empty required fields
                [name, email, details].forEach(field => {
                    if (!field.value.trim()) {
                        field.style.borderColor = '#ef4444';
                        field.addEventListener('input', () => {
                            field.style.borderColor = '';
                        }, { once: true });
                    }
                });
                return;
            }

            // Hide form, show confirmation
            contactForm.style.display = 'none';
            formConfirmation.classList.add('show');

            // Scroll to confirmation
            formConfirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Scroll Reveal (lightweight) ---
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(el => observer.observe(el));
    }

    // --- Testimonial Card Scroll Animations ---
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        testimonialCards.forEach(card => testimonialObserver.observe(card));
    }

});
