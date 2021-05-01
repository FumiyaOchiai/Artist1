// const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    // effect:'coverflow',
    // autoplay:{  
    //     delay:5000,

    // },
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        //  effect:'coverflow',

        autoplay:{
            delay:1000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });