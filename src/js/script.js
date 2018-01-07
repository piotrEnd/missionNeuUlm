
$(function () {
    $( ".port-item" ).click(function(){
    //which church        
        var number = $(this).data('target');
        $( ".port-item" ).removeClass("highlighted");
        $(this).addClass("highlighted");
    //first hide, then open
        $('.collapse').collapse('hide');
    });
});

//lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
event.preventDefault();
$(this).ekkoLightbox();
});

