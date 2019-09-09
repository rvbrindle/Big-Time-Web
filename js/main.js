$(document).ready(function(){

    $('.navigation__link').click(function(){
        $('.navigation__checkbox').prop('checked', false);
    })

    $('.btn__header').click(function(){
        $('html, body').animate({
            scrollTop: $('.about-target').offset().top
        }, 1000);
    });

    $('.btn-about').click(function(){
        $('html, body').animate({
            scrollTop: $('.section-booking').offset().top
        }, 1000);
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
})