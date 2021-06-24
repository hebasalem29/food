$(function()
{
    $(window).on('scroll',function()
    {
        if($(window).scrollTop()==0)
        {
            $(".navbar").addClass("co");
            console.log('hi');

        }
        else{
            $(".navbar").removeClass("co");

        }
        if($(window).scrollTop()>$(".header").offset().top)
        {
            $(".fr").siblings().children().removeClass("lo");
            $(".fr a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
      
        if($(window).scrollTop()>$(".about").offset().top-5)
        {
            $(".sc").siblings().children().removeClass("lo");
            $(".sc a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".menu").offset().top-10)
        {
            $(".th").siblings().children().removeClass("lo");
            $(".th a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".team").offset().top-10)
        {
            $(".fo").siblings().children().removeClass("lo");
            $(".fo a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".gallary").offset().top-10)
        {
            $(".fi").siblings().children().removeClass("lo");
            $(".fi a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".blog").offset().top-10)
        {
            $(".si").siblings().children().removeClass("lo");
            $(".si a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".pricing").offset().top-10)
        {
            $(".se").siblings().children().removeClass("lo");
            $(".se a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".reserv").offset().top-10)
        {
            $(".ei").siblings().children().removeClass("lo");
            $(".ei a").addClass("lo");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".contact").offset().top-200)
        {
            $(".nin").siblings().children().removeClass("lo");
            $(".nin a").addClass("lo");
            console.log("pp");
            console.log($(".contact").offset().top);

            console.log($(window).scrollTop());
        }
        if ($(window).scrollTop()>10)
        {
            $(".butfix").addClass("dis");
            console.log("pla");
        }
       else if ($(window).scrollTop()<10)
        {
            $(".butfix").removeClass("dis");
            console.log("pla");
        }
       
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
}
 
);