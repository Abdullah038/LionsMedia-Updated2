document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryImages = document.querySelectorAll('.gallery img');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');

            // Get the filter value
            const filterValue = this.getAttribute('data-filter');

            // Show or hide images based on the filter value
            galleryImages.forEach(img => {
                if (filterValue === 'all' || img.getAttribute('data-category') === filterValue) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
});
window.addEventListener('scroll', function() {
    const filterBar = document.querySelector('.filter-bar');
    const rect = filterBar.getBoundingClientRect();
    
    if (rect.top <= 0) {
      // The filter bar is now sticky
      filterBar.classList.add('is-sticky');
    } else {
      filterBar.classList.remove('is-sticky');
    }
  });
  