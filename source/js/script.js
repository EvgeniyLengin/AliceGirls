$(document).ready(function() {

    $(document).on("click",".button_m_menu",function() {
        $('.element_m').toggleClass('going');
        $('.mobile-nav').toggleClass('active-menu');
        $('body').toggleClass('hid');

    });

    $(document).on("click",".call-me",function() {
    $('.darc-theme').addClass('enable');
    $('body').toggleClass('hid');
    $('#modal-14').addClass('md-show');


    });
    $(document).on("click",".wrap-exit",function() {
    $('.darc-theme').removeClass('enable');
    $('body').toggleClass('hid');
    $('#modal-14').removeClass('md-show');


    });


    // This will NOT work because there is no '#test-element' ... yet

});
