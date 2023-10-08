$(document).ready(function () {
    $("#frame-1-after").hide();
    $("#frame-2-after").hide();
    $("#frame-3-after").hide();

    // frame image 1
    $('#frame-1-before').mouseover (function(){
        $('#frame-1-before').hide();
        $("#frame-1-after").show();
    });
    // $('#frame-1-before').mouseleave (function(){
    //     $('#frame-1-before').show();
    //     $("#frame-1-after").hide();
    // });

     // frame image 2
    $('#frame-2-before').mouseover (function(){
        $('#frame-2-before').hide();
        $("#frame-2-after").show();
    });
    // $('#frame-2-before').mouseleave (function(){
    //     $('#frame-2-before').show();
    //     $("#frame-2-after").hide();
    // });

     // frame image 3
    $('#frame-3-before').mouseover (function(){
        $('#frame-3-before').hide();
        $("#frame-3-after").show();
    });
    // $('#frame-3-before').mouseleave (function(){
    //     $('#frame-3-before').show();
    //     $("#frame-3-after").hide();
    // });
    
});
