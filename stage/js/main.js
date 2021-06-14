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
}
);