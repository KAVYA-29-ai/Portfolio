// Import Spline Viewer Web Component dynamically 
import 'https://unpkg.com/@splinetool/viewer@1.9.7/build/spline-viewer.js';

// Wait for the DOM to load before running custom interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded with 3D/Apple-like animations.");

    const splineViewer = document.querySelector('spline-viewer');
    const crosshair = document.querySelector('.crosshair');
    const sideNav = document.querySelector('.side-nav');

    // Smooth subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        if (splineViewer) {
            // Very subtle camera translation based on pointer
            splineViewer.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
        }
        if (crosshair) {
            // Crosshair moves opposite to cursor for deep 3D effect
            crosshair.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px))`;
        }
        if (sideNav) {
            // 3D tilt effect on the side navigation and slight movement
            sideNav.style.transform = `perspective(1000px) rotateY(${x * -5}deg) rotateX(${y * 5}deg) translate(${x * -3}px, ${y * -3}px)`;
        }
    });
});
