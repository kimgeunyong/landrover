$("document").ready(function(){

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $(".top").addClass("on");
        }
        else {
            $(".top").removeClass("on");
        }

    });

    $(".top").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $(".header .header-list .list-wrap ul li").hover(function(){
        $(".header .list-nav").addClass("on")
    }, function() {
        $(".header .list-nav").removeClass("on")
    });
    // $(".header .header-list .list-wrap li:not(:nth-child(1))").click(function() {
    //     $(".header .list-nav").addClass("on")
    // })
    

    $(".header .header-list .list-wrap .hamburger").click(function(){
        $(".header .header-list .side-nav").fadeIn()
    })
    // $(".header .header-list .side-nav::after").click(function(){
    //     $(".header .header-list .side-nav").fadeOut()
    // })
    $(".side-nav-hamburger-wrap").click(function() {
        $(".header .header-list .side-nav").fadeOut()
    })

    const swiper = new Swiper(".swiper",{
        autoplay: {
            delay: 3000
        },
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        }
    })
    
    swiper.on("transitionEnd", function(e) {
        let i = swiper.realIndex;
        
        if (i == 2) {
            $(".header .swiper .header-box:nth-child(4)").fadeIn("on")
            $(".header .swiper .header-box:not(:nth-child(4))").fadeOut("on")
        }
        if (i == 0) {
            $(".header .swiper .header-box:nth-child(2)").fadeIn("on")
            $(".header .swiper .header-box:not(:nth-child(2))").fadeOut("on")
        }
        if (i == 1) {
            $(".header .swiper .header-box:nth-child(3)").fadeIn("on")
            $(".header .swiper .header-box:not(:nth-child(3))").fadeOut("on")
        }
    })

    // $(".header .header-list .list-wrap ul li:not(:nth-child(1))").mouseover(function(){
    //     $(".header .header-list .list-nav").toggleClass("on")
    // })


    $(".slick.slide").slick({
        dots: true,
        slidesToShow: 1,
        // infinite: true,
        slidesToScroll: 1,
        autoplay: false,
        asNavFor: '.slick.bottom',
        fade: true,
    })

    $(".content .section3 .section-wrap .txt1").addClass("on")
    $('.slick.slide').on('afterChange', function() {
        var dataId = $('.slick-current').attr("data-slick-index");    
        console.log(dataId);
        let i = dataId;
        if (i == 0) {
            $(".content .section3 .section-wrap .txt1").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(2))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ?????????.png")
        } else {
            
        }
        if (i == 1) {
            $(".content .section3 .section-wrap .txt2").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(3))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item2 img").attr("src", "images/????????? ??????.png")
        } else {
            
        }
        if (i == 2) {
            $(".content .section3 .section-wrap .txt3").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(4))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item3 img").attr("src", "images/?????? ??????.png")
        } else {
            
        }
        if (i == 3) {
            $(".content .section3 .section-wrap .txt4").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(5))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item4 img").attr("src", "images/????????? ??????.png")
        } else {
            
        }
        if (i == 4) {
            $(".content .section3 .section-wrap .txt5").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(6))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item5 img").attr("src", "images/??????????????? ????????? ?????????.png")
        } else {
            
        }
        if (i == 5) {
            $(".content .section3 .section-wrap .txt6").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(7))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item6 img").attr("src", "images/??????????????? ?????????.png")
        } else {
            
        }
        if (i == 6) {
            $(".content .section3 .section-wrap .txt7").addClass("on")
            $(".content .section3 .section-wrap .text:not(:nth-child(8))").removeClass("on")
            $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/????????? ??????.png")
        } else {
            
        }
    });
    $(".slick.bottom").slick({
        dots: true,
        asNavFor: '.slick.slide',
        slidesToShow: 3,
        // infinite: true,
        slidesToScroll: 1,
        autoplay: false,
    })

    $(".content .section3 .section-wrap .text .text-box3").click(function(){
        $(".content .section3 .section-wrap .text .text-box3").toggleClass("on")
    })

    $(".content .section3 .section-wrap .text .text-box4").click(function(){
        $(".content .section3 .section-wrap .text .text-box4").toggleClass("on")
    })

    // $(".content .section3 .section-wrap .txt1 .text-box4 ul li:nth-child(1)").click(function(){
    //     $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ??????.png")
    // })

    $(".content .section3 .section-wrap .text .text-box4 ul #black").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item2 img").attr("src", "images/????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item4 img").attr("src", "images/????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item5 img").attr("src", "images/??????????????? ????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item6 img").attr("src", "images/??????????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item7 img").attr("src", "images/????????? ?????????.png")
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #red").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item2 img").attr("src", "images/????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item3 img").attr("src", "images/?????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item4 img").attr("src", "images/????????? ??????.png")
        $(".content .section3 .section-wrap .pic .slide .item5 img").attr("src", "images/??????????????? ????????? ??????.png")
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #blue").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ??????.png") 
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #green").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/?????????????????????.png")
        $(".content .section3 .section-wrap .pic .slide .item7 img").attr("src", "images/????????? ??????.png")
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #navy").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/????????????????????????.png")
        $(".content .section3 .section-wrap .pic .slide .item5 img").attr("src", "images/??????????????? ????????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item7 img").attr("src", "images/????????? ?????????.png") 
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #grey").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/????????????????????????.png")
        $(".content .section3 .section-wrap .pic .slide .item2 img").attr("src", "images/????????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item3 img").attr("src", "images/?????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item5 img").attr("src", "images/??????????????? ????????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item6 img").attr("src", "images/??????????????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item7 img").attr("src", "images/????????? ?????????.png")  
    })
    $(".content .section3 .section-wrap .text .text-box4 ul #beige").click(function(){
        $(".content .section3 .section-wrap .pic .slide .item1 img").attr("src", "images/??????????????? ?????????.png")
        $(".content .section3 .section-wrap .pic .slide .item6 img").attr("src", "images/??????????????? ?????????.png")
    })


    $(".content .section3 .section-wrap .text .text-box5").click(function(){
        $(".content .section3 .section-wrap .text .text-box5").toggleClass("on")
    })

    


    



})