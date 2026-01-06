        lucide.createIcons();
        
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileNav = document.getElementById('mobile-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.remove('hidden');
        });
        
        closeMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
        
        // Close mobile menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
            });
        });
        
        // Active navigation highlight
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (currentPage === 'main.html' && linkPage === '#hero') {
                link.classList.add('active');
            } else if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });