// swiper----------------------------
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay:{
            delay:2500,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 6,
            }
          },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// メニューオープン
  (function ($) {
    $(function () {
        $('#nav-toggle').on('click', function () {
            $('body').toggleClass('open');
        });
    });
})(jQuery);


