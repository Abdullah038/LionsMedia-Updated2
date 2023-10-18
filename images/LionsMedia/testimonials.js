document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('figure.snip1533');
  const windowHeight = window.innerHeight;

  let ticking = false;

  const checkPosition = () => {
    figures.forEach((fig, index) => {
      let rect = fig.getBoundingClientRect();

      if (rect.top < windowHeight * (index + 1) / (figures.length + 1) && rect.bottom > 0) {
        fig.classList.add('isVisible');
        fig.style.transitionDelay = `${index * 0.15}s`; // Add a delay based on index
      } else {
        // fig.classList.remove('isVisible');
        // fig.style.transitionDelay = '0s';
      }
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(checkPosition);
      ticking = true;
    }
  };

  // Initial check
  checkPosition();

  window.addEventListener('scroll', requestTick);
});
