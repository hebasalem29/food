$(function(){$(window).on("scroll",function(){0==$(window).scrollTop()?($(".navbar").addClass("co"),console.log("hi")):$(".navbar").removeClass("co")}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:2},1000:{items:3}}})});