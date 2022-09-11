/* fixed position */
if ($(".sideMenu.open").is(":visible")) {
    $("body").addClass("fixed-position");
    console.log("fixed position");
} else {
    $("body").removeClass("fixed-position");
}
// prompt("what?", "");
$(document).ready(function() {
    $(".dropdown").hover(function() {
        // $(this).preventDefault();
        $(this).toggleClass("open");
    });

    var $grid = $(".ad").isotope({
        // options
    });
    // filter items on button click
    $(".filter-button-group").on("click", "li", function() {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });

    $("#bookmark").click(function() {
        $(this).toggleClass("fa-bookmark-o");
    });

    $(window).on("scroll", function() {
        // if ($(window).scrollTop() > 100) {

        //     $("nav").addClass("fixed");
        // } else {
        //     $("nav").removeClass("fixed");

        // }
        var scroll = $(this).scrollTop();
        var topDist = $(".head-sec").offset().top;
        if (scroll > +topDist + 40) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }
    });
    if ($(".Explore-sec").is(":visible")) {
        console.log("Enter");
    }
    if ($(".sideMenu.open").is(":visible")) {
        //do stuff in here
        console.log("fixed");
        $("body").toggleClass("fixed-position");
    } else {}
    /* fixed position */

    // $(".nav-tabs #a").click(function () {
    //     $("#profile").hide();
    //     $("#home").hide();
    //     $("#messages").hide();
    //     $("#settings").hide();
    //     $("#home").slideDown(200);
    // });
    // $(".nav-tabs #b").click(function () {
    //     $("#profile").hide();
    //     $("#home").hide();
    //     $("#messages").hide();
    //     $("#settings").hide();
    //     $("#profile").slideDown(200);
    // });

    // $(".nav-tabs #c").click(function () {
    //     $("#profile").hide();
    //     $("#home").hide();
    //     $("#messages").hide();
    //     $("#settings").hide();
    //     $("#messages").show(200);
    // });
    // $(".nav-tabs #d").click(function () {
    //     $("#profile").hide();
    //     $("#home").hide();
    //     $("#messages").hide();
    //     $("#settings").hide();
    //     $("#settings").slideDown(200);
    // });

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        dots: false,
        margin: 10,
        // stagePadding: -5,
        responsiveBaseElement: "body",
        autoplaySpeed: 2000,
        lazyLoad: true,
        animateIn: "ease-in",
        animateOut: "ease-out",
        responsive: {
            0: {
                items: 2,
                lazyLoad: true,
            },
            700: {
                items: 3,
            },
            1220: {
                items: 5,
            },
        },
    });
});
$(".a").on("drag.owl.carousel", function(event) {
    $("body").css("overflow", "hidden");
});
$(".a").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    // dots: true,
    margin: 20,
    // stagePadding: -5,
    responsiveBaseElement: "body",
    autoplaySpeed: 2000,
    lazyLoad: true,
    //     animateIn: 'ease-in',
    // animateOut: 'ease-out',
    animateOut: "fadeOut", // for fade out only
    // add both if you want both effect
    animateIn: "fadeIn",

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 2,
        },
    },
});

$(".b").owlCarousel({
    loop: true,
    item: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    margin: 20,
    // stagePadding: -5,
    responsiveBaseElement: "body",
    autoplaySpeed: 2000,
    lazyLoad: true,
    animateIn: "ease-in",
    animateOut: "ease-out",
    nav: true,
    // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        992: {
            items: 2,
            dots: true,
        },
        1200: {
            items: 3,
            nav: true,
            dots: true,
        },
    },
});
// var owl = $('.owl-carousel');