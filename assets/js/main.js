const year = new Date().getFullYear();
const mensagem = "&copy; Copyright - " + year;
$('#texto-footer').html(mensagem);

/* Preloader */
$(window).on('load', function () {
    $('.preloader').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});

/* Button back to top */
const buttonTop = $("#btn-back-to-top");
window.onscroll = function () {
    if ($(window).scrollTop() > 20) {
        buttonTop.css("display", "block");
    } else {
        buttonTop.css("display", "none");
    }
};
buttonTop.bind('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
