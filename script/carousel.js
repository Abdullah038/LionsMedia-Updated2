const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

// Automatic slide function
const autoSlide = function() {
    const currentActive = elems.find((elem) => elem.dataset.pos == 0);
    const nextActive = elems.find((elem) => elem.dataset.pos == 1) || elems[0];
    update(nextActive);
};

// Initialize the interval to call autoSlide every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 4000);

function resetInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 4000);
}

carouselList.addEventListener('click', function (event) {
    const newActive = event.target.closest('.carousel__item');
    const isItem = newActive && newActive.closest('.carousel__item');
  
    if (!isItem || newActive.classList.contains('carousel__item_active')) {
      return;
    }
  
    update(newActive);
    resetInterval();
});

const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel__item_active');
  
    [current, prev, next, first, last].forEach(item => {
        const itemPos = item.dataset.pos;
        item.dataset.pos = getPos(itemPos, newActivePos);
    });
};

const getPos = function (current, active) {
    const diff = current - active;
    if (Math.abs(current - active) > 2) {
        return -current;
    }
    return diff;
};

let startX; // This will store the touch start position

carouselList.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX; // Get the initial touch position
});

carouselList.addEventListener('touchend', function (event) {
    const moveEndX = event.changedTouches[0].clientX; 
    const deltaX = startX - moveEndX; 

    if (Math.abs(deltaX) > 50) { 
        if (deltaX > 0) {
            const nextActive = elems.find((elem) => elem.dataset.pos == 1) || elems[0];
            update(nextActive);
        } else {
            const prevActive = elems.find((elem) => elem.dataset.pos == -1) || elems[elems.length - 1];
            update(prevActive);
        }
        resetInterval();
    }
});
