$(function() {
    $(function() {
        $('.jcarousel').jcarousel({
            // Configuration goes here
        });
    });
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });
     
    $('.jcarousel').jcarouselAutoscroll({
        target: '+=1',
        autostart: true,
    });
});