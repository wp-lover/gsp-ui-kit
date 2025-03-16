// Example: Initialize Swiper after it's loaded.
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".gsp-ui-kit-slider", {
        slidesPerView: 1, // Default to 1 slide
        spaceBetween: 30,
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".gsp-ui-kit-slider__pagination",
          clickable: true,
        },
        breakpoints: {
          601: {
            slidesPerView: 1, // 1 slide for screens >= 601px (effectively 600+)
          },
          768: {
            slidesPerView: 2, // 1 slide for screens >= 601px (effectively 600+)
          },
          1001: {
            slidesPerView: 3, // 3 slides for screens >= 1001px (effectively 1000+)
          },
        },
      });
});