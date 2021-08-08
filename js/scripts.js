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
const swiper = new Swiper('.section-hero-image', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need paginsation
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
// === / Slider hero image ===