document.addEventListener("DOMContentLoaded", () => {
  const defaultPlaceholder =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'>" +
        "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
        "<stop offset='0%' stop-color='#eef6ea'/><stop offset='100%' stop-color='#e4e9ef'/>" +
        "</linearGradient></defs>" +
        "<rect width='1280' height='720' fill='url(#g)'/>" +
        "<circle cx='240' cy='140' r='140' fill='#dbe8d4'/>" +
        "<circle cx='1110' cy='620' r='190' fill='#dfe5ec'/>" +
        "<text x='640' y='332' font-family='Arial, sans-serif' font-size='84' text-anchor='middle' fill='#1f2733' font-weight='700'>MEJC</text>" +
        "<text x='640' y='396' font-family='Arial, sans-serif' font-size='34' text-anchor='middle' fill='#4f8b3a'>Image Placeholder</text>" +
      "</svg>"
    );

  const setFallbackIfBroken = (img) => {
    const src = (img.getAttribute("src") || "").trim();
    if (!src) {
      img.src = defaultPlaceholder;
      return;
    }
    img.addEventListener("error", () => {
      if (img.src !== defaultPlaceholder) img.src = defaultPlaceholder;
    });
    img.addEventListener("load", () => {
      if ((img.naturalWidth || 0) === 0 || (img.naturalHeight || 0) === 0) {
        img.src = defaultPlaceholder;
      }
    });
  };

  document
    .querySelectorAll(".blog-slide-image, .video-thumb, .member-avatar, .media-card img")
    .forEach(setFallbackIfBroken);

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

  if (window.Swiper && document.querySelector(".members-swiper")) {
    new Swiper(".members-swiper", {
      slidesPerView: 1,
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".members-swiper-next",
        prevEl: ".members-swiper-prev"
      },
      pagination: {
        el: ".members-swiper-pagination",
        clickable: true
      },
      breakpoints: {
        700: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    });
  }
});
