const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

// carouselList.addEventListener('click', function (event) {
//   var newActive = event.target;
//   var isItem = newActive.closest('.carousel__item');

//   if (!isItem || newActive.classList.contains('carousel__item_active')) {
//     return;
//   };
  
//   update(newActive);
// });


// Automatic slide function
// Automatic slide function
const autoSlide = function() {
    const currentActive = elems.find((elem) => elem.dataset.pos == 0);
    const nextActive = elems.find((elem) => elem.dataset.pos == 1) || elems[0];
    update(nextActive);
  };
  
  // Initialize the interval to call autoSlide every 3 seconds
  let autoSlideInterval = setInterval(autoSlide, 4000);
  
  carouselList.addEventListener('click', function (event) {
    var newActive = event.target.closest('.carousel__item');

    var isItem = newActive.closest('.carousel__item');
  
    if (!isItem || newActive.classList.contains('carousel__item_active')) {
      return;
    };
    
    clearInterval(autoSlideInterval); // Clear the interval when a user clicks
  
    update(newActive);
  
    autoSlideInterval = setInterval(autoSlide, 3000); // Restart the interval after the click event
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
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}