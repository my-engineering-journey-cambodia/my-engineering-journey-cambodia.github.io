document.addEventListener("DOMContentLoaded", () => {
  if (window.Swiper && document.querySelector(".blog-swiper")) {
    new Swiper(".blog-swiper", {
      slidesPerView: 1,
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".blog-swiper-next",
        prevEl: ".blog-swiper-prev"
      },
      pagination: {
        el: ".blog-swiper-pagination",
        clickable: true
      },
      breakpoints: {
        760: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 3
        }
      }
    });
  }
});
