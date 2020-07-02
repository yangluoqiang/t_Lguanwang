$(function () {
    /*导航跳转效果插件*/
    $('.nav').singlePageNav({
        offset: 70
    });
    /*小屏幕导航点击关闭菜单*/
    $('.navbar-collapse a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    new WOW().init();
    // 轮播时间
    $('#myCarousel').carousel({
        interval: 3000
    })
    // 新闻切换
    $('.newstab span').each(function (i) {
        $(this).on('click', function () {
            $(this).addClass('curr').siblings().removeClass('curr');
            //$('.newscontainer .tab-box ').fadeOut(500);
            $('.newscontainer .tab-box ').eq(i).fadeIn(200).siblings().fadeOut(200);
            $('.scenes-toggle').eq(i).show().siblings('.scenes-toggle').hide();
            $('.redtext').eq(i).show().siblings('.redtext').hide();
        })
    })
})