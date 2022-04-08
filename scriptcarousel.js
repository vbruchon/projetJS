(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });
        $('.jcarousel').jcarouselAutoscroll({
            target: '+=1'
        });

        $('.jcarousel-prev').jcarouselControl({
            cible: '-=1'
        });
    
        $('.jcarousel-next').jcarouselControl({
            cible: ''
        });
    });
})(jQuery);

$(function () {
    $(function () {
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

    $('.jcarousel-prev').jcarouselControl({
        cible: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        cible: '+=2'
    });
});