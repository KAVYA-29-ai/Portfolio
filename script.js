// Wait for the DOM to load before running custom interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded with premium Apple-like animations.");

    const aboutCard = document.querySelector('.about-card');
    const orbs = document.querySelectorAll('.glow-orb');
    const sideNav = document.querySelector('.side-nav');
    const techVines = document.querySelectorAll('.tech-vine');

    // Smooth subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        if (aboutCard) {
            // Very subtle card tilt and translate
            aboutCard.style.transform = `translate(calc(-50% + ${x * 10}px), calc(-50% + ${y * 10}px)) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
        }

        if (orbs.length) {
            // Orbs move opposite to cursor to create depth
            orbs.forEach((orb, i) => {
                const depth = (i + 1) * 30;
                orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
            });
        }

        if (sideNav) {
            // Subtle 3D tilt on nav
            sideNav.style.transform = `perspective(1000px) rotateY(${x * -5}deg) rotateX(${y * 5}deg)`;
        }

        if (techVines.length) {
            // Subtle parallax for tech vines
            techVines.forEach(vine => {
                const rect = vine.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) / window.innerWidth;
                const deltaY = (e.clientY - centerY) / window.innerHeight;
                vine.style.transform = `translate(${deltaX * 15}px, ${deltaY * 15}px) ${vine.classList.contains('top-right-vine') || vine.classList.contains('bottom-right-vine') ? 'scaleX(-1)' : ''}`;
            });
        }
    });

    // Add entry animation hooks if needed
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
