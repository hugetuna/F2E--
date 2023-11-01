$(document).ready(function () {

    $('.nav-li').hover(
        function () {//hover in
            $(this).children('.nav-ul-l2').stop().slideDown(500);
        },
        function () {//hover out
            $(this).children('.nav-ul-l2').stop().slideUp(200);
        }
    );
    /*大圖放大*/
    $('#show-pic').click(
        function () {
            let images = $(this).attr('src');
            $('#fix-img').children('img').attr('src', images);
            $('#fix-img').show();
        }
    );
    $('#x-but').click(
        function () {
            $('#fix-img').hide();
        }
    );

    /*圖片切換*/
    $('#select-pic > .select-picbox > img').click(
        function () {
            let images = $(this).attr('src');
            $('#show-pic').attr('src', images);
        }
    );
});