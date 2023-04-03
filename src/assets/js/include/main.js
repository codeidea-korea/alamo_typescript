$(document).ready(function() {
	// news & notice swiper
	var ww = $(window).width();
	var mySwiper = undefined;

	function initSwiper() {

		if (ww > 768 && mySwiper == undefined) {
			mySwiper = new Swiper(".board-swiper", {
				slidesPerView: 2.8,
				spaceBetween: 40,
				autoplay: {
					delay: 3500,
				},
				pagination: {
					el: ".swiper_pg",
					type: "progressbar",
				},
				navigation: {
					nextEl: ".swiper_btn_next",
					prevEl: ".swiper_btn_prev",
				},
				breakpoints: {
				1024: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 2.7,
					spaceBetween: 20,
				},
				}
			});
		} else if (ww <= 768 && mySwiper != undefined) {
			mySwiper.destroy();
			mySwiper = undefined;
		}
	}

	initSwiper();

	$(window).on('resize', function () {
	ww = $(window).width();
	initSwiper();
});


	// 게시판 일시정지버튼
	$('.section3 .swiper_auto_btn').click(function(){
		if($(this).hasClass('stop')){
			$(this).removeClass("stop");
			$(this).addClass("play");
			mySwiperSec3 .autoplay.stop();
		} else if($(this).hasClass('play')){
			$(this).addClass("stop");
			$(this).removeClass("play");
			mySwiperSec3 .autoplay.start();
		}
	});
	$('.section04 .swiper_auto_btn').click(function(){
		if($(this).hasClass('stop')){
			$(this).removeClass("stop");
			$(this).addClass("play");
			mySwiper .autoplay.stop();
		} else if($(this).hasClass('play')){
			$(this).addClass("stop");
			$(this).removeClass("play");
			mySwiper .autoplay.start();
		}
	});
	// 동영상팝업
	$(".pop_btn").click(function(){
		$(".pn_popup").fadeIn(400);
		$('body').css( 'overflow', 'hidden' );
	});
	$(".close_btn").click(function(){
		$(".pn_popup").fadeOut(400);
		$('body').css( 'overflow', 'auto' );
	});

	// 호버영역잡기

	for (let i = 0; i < 11; i++) {
		$(".blank"+ i).mouseenter(function(){
			$(".svg_group" + i).children(".svg_tit").addClass("on");
			$(".svg_group" + i).children(".svg_shadow_wrap").addClass("on");
		});
		$(".blank" + i).mouseleave(function(){
			$(".svg_group" + i).children(".svg_tit").removeClass("on");
			$(".svg_group" + i).children(".svg_shadow_wrap").removeClass("on");
		});
	}

	// sec3 슬라이드
    mySwiperSec3 = new Swiper('.slide1_wide .swiper-container.swiper-slide-wrap', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.slide1_wide .swiper-pagination',
            clickable: true,
        },
        navigation: { // 네비게이션 설정
            nextEl: '.board_swiper_btn.swiper_btn_next', // 다음 버튼 클래스명
            prevEl: '.board_swiper_btn.swiper_btn_prev', // 이번 버튼 클래스명
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },

        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    /*이미지 비율 맞추는 스크립트*/
    /*비율 맞출 필요가 없다면 css와 함께 삭제하세요*/

    // $(document).ready(function () {

    //     $('.slide1_wide .img').find('img').each(function () {
    //         var prtHeight = $(this).parent().height();

    //         if ($(this).height() > prtHeight) {
    //             $(this).addClass('tall');

    //         } else if ($(this).height() < prtHeight) {
    //             $(this).addClass('wide');
    //         }
    //     });
    // });

    // $(window).resize(function () {
    //     var imgboxWidth = $('.slide1_wide .img').width();

    //     $('.slide1_wide .img').height(imgboxWidth * 0.8); //비율 맞춰주는
    // }).resize();
	
});






