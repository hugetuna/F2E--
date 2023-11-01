$(document).ready(function () {

    $('.nav-li').hover(
        function () {//hover in
            $(this).children('.nav-ul-l2').stop().slideDown(500);

        },
        function () {//hover out
            $(this).children('.nav-ul-l2').stop().slideUp(200);
        }
    );


    $(window).scroll(
        function () {
            let scroll = $(window).scrollTop(); // 取得滾動條位置
            if (scroll > 1000) {
                $('.intro-img').children('#img1').fadeIn(500);
            }
            if (scroll > 1400) {
                $('.intro-img').children('#img2').fadeIn(500);
            }
            if (scroll > 1800) {
                $('.intro-img').children('#img3').fadeIn(500);
            }
            if (scroll < 1000) {
                $('.intro-img').children('img').fadeOut(200);
            }

        }
    );
});