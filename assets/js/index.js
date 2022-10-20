$(document).ready(() => {
    $('.scroll-down').click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scrolldowntarget").offset().top
        }, 1000);
    })
})