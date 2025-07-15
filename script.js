document.addEventListener('DOMContentLoaded', function() {
    // =============== Mobile Menu Toggle ===============
    const toggleBtn = document.getElementById('toggleBtn');
    const navMenu = document.getElementById('navMenu');
    
    toggleBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                toggleBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // =============== Touch Device Detection ===============
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    // Add touch-specific classes if needed
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }
    
    // =============== Smooth Scrolling ===============
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset considering fixed header
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active-link');
                });
                this.classList.add('active-link');
            }
        });
    });
    
    // =============== Typewriter Effect ===============
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                // Add cursor blink animation after typing completes
                typewriter.style.borderRight = '3px solid var(--primary)';
                typewriter.style.animation = 'blink-caret 0.75s step-end infinite';
            }
        }, 100);
    }
    
    // =============== Form Submission ===============
    const cyberForm = document.getElementById('cyberForm');
    const successOverlay = document.getElementById('successOverlay');
    
    if (cyberForm) {
        cyberForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.cyber-button');
            submitButton.innerHTML = '<span>SENDING...</span><div class="cyber-button__glow"></div><div class="cyber-button__border"></div>';
            submitButton.disabled = true;
            
            // Simulate sending delay
            setTimeout(() => {
                successOverlay.classList.add('active');
                
                // Reset form after showing success
                setTimeout(() => {
                    this.reset();
                    submitButton.innerHTML = '<span>SEND MESSAGE</span><div class="cyber-button__glow"></div><div class="cyber-button__border"></div>';
                    submitButton.disabled = false;
                    
                    // Hide success message after delay
                    setTimeout(() => {
                        successOverlay.classList.remove('active');
                    }, 3000);
                }, 1500);
            }, 2000);
        });
    }
    
    // =============== Scroll Animations ===============
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .project-card, .skill-item, .experience-card, .cyber-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // =============== Active Navigation Highlighting ===============
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.getElementById('header').offsetHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });
    
    // =============== Infinite Skills Animation ===============
    const skillsTrack = document.querySelector('.skills-track');
    const skillsGrid = document.querySelector('.skills-grid');
    
    if (skillsTrack && skillsGrid) {
        // Clone skills for seamless looping
        skillsGrid.innerHTML += skillsGrid.innerHTML;
        
        let animationFrame;
        let scrollPos = 0;
        let scrollSpeed = 0.5;
        let isPaused = false;
        
        const animateSkills = () => {
            if (!isPaused) {
                scrollPos -= scrollSpeed;
                if (scrollPos <= -skillsGrid.scrollWidth / 2) {
                    scrollPos = 0;
                }
                skillsGrid.style.transform = `translateX(${scrollPos}px)`;
            }
            animationFrame = requestAnimationFrame(animateSkills);
        };
        
        animateSkills();
        
        // Adjust speed based on device
        if (window.innerWidth <= 768) {
            scrollSpeed = 0.3;
        }
        
        // Pause on hover (desktop) or touch (mobile)
        if (isTouchDevice) {
            skillsTrack.addEventListener('touchstart', () => {
                isPaused = true;
            });
            
            skillsTrack.addEventListener('touchend', () => {
                isPaused = false;
            });
        } else {
            skillsTrack.addEventListener('mouseenter', () => {
                isPaused = true;
            });
            
            skillsTrack.addEventListener('mouseleave', () => {
                isPaused = false;
            });
        }
    }
    
    // =============== Mobile-Specific Optimizations ===============
    function handleMobileResize() {
        // Adjust layout for mobile
        if (window.innerWidth <= 992) {
            // Mobile-specific adjustments
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.cursor = 'pointer';
            });
            
            // Make project cards clickable on mobile
            document.querySelectorAll('.project-btn').forEach(btn => {
                btn.style.pointerEvents = 'auto';
            });
        }
    }
    
    // Initial check and on resize
    handleMobileResize();
    window.addEventListener('resize', handleMobileResize);
    
    // =============== Touch Feedback for Interactive Elements ===============
    if (isTouchDevice) {
        document.querySelectorAll('.btn, .icon, .project-card, .skill-item').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // =============== Prevent Zoom on Input Focus (Mobile) ===============
    if (isTouchDevice) {
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', function() {
                document.body.style.zoom = "100%";
            });
        });
    }
    
    // =============== Loader Animation (Optional) ===============
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500);
    });
});