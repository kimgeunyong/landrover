$("document").ready(function () {
    $(".header .line-wrap .list").mouseover(function(){
        $(".header .line-wrap .list-nav").toggle()
    })
    $(".content .buy .b-left .b-bottom::after").click(function(){
        
    })
    $(".slick.b-top-slide").slick({
            dots: false,
            slidesToShow: 1,
            // infinite: true,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.slick.b-bottom',
            fade: true,
        })
    $(".slick.b-bottom").slick({
        dots: false,
        asNavFor: '.slick.b-top-slide',
        slidesToShow: 3,
        // infinite: true,
        slidesToScroll: 1,
        autoplay: false,
    })
    $(".slick-header").slick({
        dots: false,
        asNavFor: '.slick-header,slide-item',
        slidesToShow: 1,
        // infinite: true,
        slidesToScroll: 1,
        autoplay: false,
    })

    $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(3)").click(function(){
        $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(3)").toggleClass("on")
    })
    $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(4)").click(function(){
        $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(4)").toggleClass("on")
    })
    $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(5)").click(function(){
        $(".content .buy .buy-wrap .b-right .b-right-wrap .right-box3:nth-child(5)").toggleClass("on")
    })
})