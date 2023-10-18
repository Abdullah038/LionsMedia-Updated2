$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      dots: true,
      responsive: {
          0: {  // From 0px to 767px display 1 item
              items: 1
          },
          768: {  // From 768px upwards display 3 items
              items: 2
          },
          1150: {
            item: 3
          }
      }
      // If you need other options like nav, autoplay, etc., just uncomment them.
      // autoplay: false,
      // nav: true,
      // navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"]
  });
});
