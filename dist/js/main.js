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