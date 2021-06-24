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
            $(".fr").siblings().removeClass("lo1");
            $(".fr ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
      
        if($(window).scrollTop()>$(".about").offset().top-5)
        {
            $(".sc").siblings().children().removeClass("lo");
            $(".sc a").addClass("lo");
            $(".sc").siblings().removeClass("lo1");
            $(".sc").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".menu").offset().top-10)
        {
            $(".th").siblings().children().removeClass("lo");
            $(".th a").addClass("lo");
            $(".th").siblings().removeClass("lo1");
            $(".th ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".team").offset().top-10)
        {
            $(".fo").siblings().children().removeClass("lo");
            $(".fo a").addClass("lo");
            $(".fo").siblings().removeClass("lo1");
            $(".fo ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".gallary").offset().top-10)
        {
            $(".fi").siblings().children().removeClass("lo");
            $(".fi a").addClass("lo");
            $(".fi").siblings().removeClass("lo1");
            $(".fi ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".blog").offset().top-10)
        {
            $(".si").siblings().children().removeClass("lo");
            $(".si a").addClass("lo");
            $(".si").siblings().removeClass("lo1");
            $(".si ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".pricing").offset().top-10)
        {
            $(".se").siblings().children().removeClass("lo");
            $(".se a").addClass("lo");
            $(".se").siblings().removeClass("lo1");
            $(".se ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".reserv").offset().top-10)
        {
            $(".ei").siblings().children().removeClass("lo");
            $(".ei a").addClass("lo");
            $(".ei").siblings().removeClass("lo1");
            $(".ei ").addClass("lo1");
            console.log("pp");
            console.log($(".about").offset().top);
        }
        if($(window).scrollTop()>$(".contact").offset().top-200)
        {
            $(".nin").siblings().children().removeClass("lo");
            $(".nin a").addClass("lo");
            $(".nin").siblings().removeClass("lo1");
            $(".nin ").addClass("lo1");
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
    $(".men").on('click',function()
    {
        $(".xx").toggleClass("dis1");
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