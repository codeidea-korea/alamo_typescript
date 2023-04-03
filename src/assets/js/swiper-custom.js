$(function () {
  //메인 비주얼 SWIPER
  var MainSwiper = new Swiper('.swiper-main', {
    loop: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(".swiper-button-pause").click(function () {
    MainSwiper.autoplay.stop();
  });

  $(".swiper-button-play").click(function () {
    MainSwiper.autoplay.play();
  });

 

  //이벤트 SWIPER
  var Eventswiper = new Swiper(".swiper-event", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination.pg2",
      clickable: true,
    },
    breakpoints: {
      550: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    }
  });



  //
  var Etcswiper = new Swiper(".swiper-etc", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination.pg3",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
      },
    }
  });

  let isSliderActive = true;
  //메인 SWIPER BUTTON
  $(".swiper-button-pause").click(function () {
    if (isSliderActive) {
      MainSwiper.autoplay.stop();
      isSliderActive = false;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_play.png" alt="">';
    } else {
      MainSwiper.autoplay.start();
      isSliderActive = true;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_pause.png" alt="">';
    }
  });

  //이벤트 SWIPER BUTTON
  $(".event-swiper-button-pause").click(function () {
    if (isSliderActive) {
      Etcswiper.autoplay.stop();
      isSliderActive = false;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_play.png" alt="">';
    } else {
      Eventswiper.autoplay.start();
      isSliderActive = true;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_pause.png" alt="">';
    }
  });

  // SWIPER BUTTON
  $(".etc-swiper-button-pause").click(function () {
    if (isSliderActive) {
      Etcswiper.autoplay.stop();
      isSliderActive = false;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_play.png" alt="">';
    } else {
      Eventswiper.autoplay.start();
      isSliderActive = true;
      this.innerHTML = '<img src="./resources/img/icon/main-slide_pause.png" alt="">';
    }
  });

});


var swiper = new Swiper(".timeswiper", {
  slidesPerView: 5,
  direction: "vertical",
  slidesOffsetBefore: 0,
  speed: 800,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false
  },
  simulateTouch: true,
});

var swiper2 = new Swiper(".timeswiper2", {
  slidesPerView: 5,
  direction: "vertical",
  slidesOffsetBefore: 0,
  speed: 800,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false
  },
  simulateTouch: true,
});



