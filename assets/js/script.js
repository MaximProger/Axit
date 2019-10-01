$(function() {

    var scrollOffset = $(window).scrollTop();

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    $('.btn_1').click(function() {
        if ($('.tabs__btn').hasClass('active')) {
            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');
        }
        $('.btn_1').addClass('active');
        $('#tab1').addClass('active');

        
    });

    $('.btn_2').click(function() {
        if ($('.tabs__btn').hasClass('active')) {
            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');
        }
        $('.btn_2').addClass('active');
        $('#tab2').addClass('active');

        
    });

    $('.btn_3').click(function() {
        if ($('.tabs__btn').hasClass('active')) {
            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');
        }
        $('.btn_3').addClass('active');
        $('#tab3').addClass('active');

        
    });

    // (('.tabs__btn' && '.tabs__content').hasClass('active')) {
    
    // $('.btn_1').click(function() {

    //     $('.btn_1').addClass('active');
    //     $('#tab1').addClass('active');
    //     $('.btn_2').remoteClass('active');
    //     $('#tab2').remoteClass('active');
    //     $('.btn_3').remoteClass('active');
    //     $('#tab3').remoteClass('active');
        
    // });

    // $('.btn_2').click(function() {

    //     $('.btn_2').addClass('active');
    //     $('#tab2').addClass('active');
    //     $('.btn_1').remoteClass('active');
    //     $('#tab1').remoteClass('active');
    //     $('.btn_3').remoteClass('active');
    //     $('#tab3').remoteClass('active');
        
    // });

    // $('.btn_3').click(function() {

    //     $('.btn_3').addClass('active');
    //     $('#tab3').addClass('active');
    //     $('.btn_2').remoteClass('active');
    //     $('#tab2').remoteClass('active');
    //     $('.btn_1').remoteClass('active');
    //     $('#tab1').remoteClass('active');
        
    // });

    





    // $('.btn_2').click(function() {
    //     $('#tab2').addClass('active');

    // });
    // $('.btn_3').click(function() {
    //     $('#tab3').addClass('active');

    // });

    // $("[data-collapse]").on("click", function(event) {
    //     event.preventDefault();
    //     var $this = $(this),
    //         blockId = $this.data('collapse');

    //     $this.toggleClass("active");

    //     if ($this.toggleClass("active")) {

    //     }

    // });
    
});