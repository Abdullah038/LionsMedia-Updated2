document.addEventListener('DOMContentLoaded', function() {
    const images = [...document.querySelectorAll('.gallery-image')];
    let activeImageIndex = 0;
    let zIndexCounter = 10000;  // Start with a high z-index counter value

    // Initially hide all images, set default z-index, and set the initial scale
    images.forEach(img => {
        img.style.display = 'none';
        img.style.zIndex = '0';
        img.style.transform = 'scale(0.01)';
    });

    function animateImage(img, direction, halfwayCallback, endCallback) {
        let scale = 0.1;
        let offset = direction === 'left' ? -2.5 : 2.5;
        const endTiltAngle = direction === 'left' ? 40 : -40;
        const scaleIncrement = 0.02;
        const offsetIncrement = direction === 'left' ? -2 : 2;
        let opacity = 1;

        img.style.zIndex = zIndexCounter.toString();  // Assign the current z-index counter value
        zIndexCounter--;  // Decrement the counter

        img.style.display = 'block';

        

        function step() {
            if (scale > .8 && halfwayCallback) {
                halfwayCallback();
                halfwayCallback = null;
            }

            if (scale > 4) {
                // Reset the properties
                img.style.transform = 'scale(0.01)';
                img.style.opacity = '1';  // Reset opacity
                img.style.display = 'none';
                
                if (endCallback) endCallback();
                return;
            }

            if (scale > .1) {
                opacity = 3 - scale;
                img.style.opacity = opacity;
            }

            // Calculate tilt angle based on scale
            let currentTilt = endTiltAngle * ((scale - 0.1) / 1.9); 

            img.style.transform = `scale(${scale}) translateX(${offset}px) rotateY(${currentTilt}deg)`;
            scale += scaleIncrement;
            offset += offsetIncrement;

            img.style.transition = 'transform 5s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 3s linear';
            setTimeout(step, 115);
        }

        step();
    }

    function startAnimation() {
        if (activeImageIndex >= images.length) {
            activeImageIndex = 0;  // Reset the index back to the start
        }
    
        const direction = (activeImageIndex % 2 === 0) ? 'left' : 'right';
    
        animateImage(images[activeImageIndex], direction, function() {
            // Trigger next image animation immediately after the current one reaches 20%
            setTimeout(() => {
                activeImageIndex++;
                startAnimation();
            }, 1500);
        }, null);
    }

    startAnimation();
});
