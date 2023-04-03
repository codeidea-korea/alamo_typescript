$(document).ready(function () {
   // mobile gnb click
    $(document).on('click', '.ham_btn', function () {
        $(this).addClass('active');
        $('.header_mobile').fadeIn();
        $('.mobile-menu_gnb').animate({
            right: 0
        }, 500);
    
        $('html, body').addClass('noneScroll');
        //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });

    $(document).on('click', '.ham_btn.active', function () {
        $(".ham_btn").removeClass('active');

        $('.mobile-menu_gnb').animate({
            right: '-100%'
        }, 500);
        $('.header_mobile').stop().fadeOut();
        $('html, body').removeClass('noneScroll');
        //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header").addClass("scroll");
        } else {
            $(".header").removeClass("scroll");
        }
    });


    // hammenu e

    
    //스크롤 탑 메인 비주얼 높이 - 500px 부터 헤더에 클래스 추가
    $(window).on("scroll", function () {
        var headerHeight = $('header').height() - 50;
        if ($(window).scrollTop() < headerHeight) {
          $('header').removeClass('scroll');
        } else if ($(window).scrollTop() > headerHeight) {
            $('header').addClass('scroll');
        }
    });
    



});

