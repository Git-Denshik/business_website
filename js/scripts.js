// === Подключаем скрипт аккордион ===
document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active')
    }
})
// === / Подключаем скрипт аккордион ===


// === Подключаем бургер меню ===
document.querySelector('.btn-burger').addEventListener('click', (event) => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav')
})
// === / Подключаем бургер меню  ===


// === Slider hero image ===
new Swiper('.section-hero-image', {

    pagination: {
      el: '.section-hero-image .dots',
      clickable:true,
    },
  });
// === / Slider hero image ===


// === Slider blog ===
new Swiper('.slider-blog-container', {
    loop: true,

    pagination: {
      el: '.section-blog .dots',
      clickable:true,
    },

    navigation: {
      nextEl: '.section-blog .swiper-button-next',
      prevEl: '.section-blog .swiper-button-prev',
    },
  });
// === / Slider blog ===


// === / Quotes ===
const swiper = new Swiper('.section-quotes-container', {
  loop: true,
  slidesPerView: 'auto',

  pagination: {
    el: '.section-quotes .dots',
  },
});
// === / Quotes ===