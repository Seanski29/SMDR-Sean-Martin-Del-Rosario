        // Initialize Lucide icons
        lucide.createIcons();
        
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileNav = document.getElementById('mobile-nav');
        
        if (mobileMenuBtn && closeMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
            
            closeMenuBtn.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                document.body.style.overflow = '';
            });
            
            // Close mobile menu when clicking a link
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.add('hidden');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu when clicking outside
            mobileNav.addEventListener('click', (e) => {
                if (e.target === mobileNav) {
                    mobileNav.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only handle anchor links that aren't external pages
                if (href === '#' || href.includes('#')) {
                    e.preventDefault();
                    
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const navbarHeight = document.querySelector('nav').offsetHeight;
                        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update URL without page reload
                        if (history.pushState) {
                            history.pushState(null, null, href);
                        }
                    }
                }
            });
        });
        
        // Update copyright year
        document.addEventListener('DOMContentLoaded', () => {
            const copyrightElements = document.querySelectorAll('footer p');
            copyrightElements.forEach(element => {
                if (element.textContent.includes('2024') || element.textContent.includes('2026')) {
                    element.textContent = element.textContent.replace(/2024|2026/g, new Date().getFullYear());
                }
            });
        });
        
        // Add loading="lazy" to images for better mobile performance
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        });