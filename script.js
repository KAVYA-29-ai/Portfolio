// Wait for the DOM to load before running custom interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded with premium Apple-like animations.");

    const body = document.body;
    const aboutCard = document.querySelector('.about-card');
    const orbs = document.querySelectorAll('.glow-orb');
    const sideNav = document.querySelector('.side-nav');
    const techVines = document.querySelectorAll('.tech-vine');

    // Page Transition Logic
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Only intercept internal links that aren't hashes
        if (href && !href.startsWith('http') && !href.startsWith('#') && href !== 'javascript:void(0)') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.add('page-transitioning');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match CSS animation duration
            });
        }
    });

    // Smooth subtle parallax effect on mouse move
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Use requestAnimationFrame for smoother parallax
    function animate() {
        // Linear interpolation for smoothness
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        if (aboutCard) {
            aboutCard.style.transform = `translate(calc(-50% + ${currentX * 15}px), calc(-50% + ${currentY * 15}px)) rotateY(${currentX * 5}deg) rotateX(${currentY * -5}deg)`;
        }

        if (orbs.length) {
            orbs.forEach((orb, i) => {
                const depth = (i + 1) * 20;
                orb.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });
        }

        if (sideNav) {
            sideNav.style.transform = `perspective(1000px) rotateY(${currentX * -8}deg) rotateX(${currentY * 8}deg)`;
        }

        if (techVines.length) {
            techVines.forEach(vine => {
                const rect = vine.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (currentX * window.innerWidth / 2) / window.innerWidth;
                const deltaY = (currentY * window.innerHeight / 2) / window.innerHeight;
                
                vine.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px) ${vine.classList.contains('top-right-vine') || vine.classList.contains('bottom-right-vine') ? 'scaleX(-1)' : ''}`;
            });
        }

        requestAnimationFrame(animate);
    }
    animate();

    // Add entry animation class
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100);
});
