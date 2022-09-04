// add padding top to show content behind navbar
$('body').css('padding-top', $('.main-nav').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
})
