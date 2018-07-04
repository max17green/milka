var ball_sh = -11;
var topy = 0;
var delta = 0;
var controller;
var ball_point_1, ball_point_2, ball_point_3, ball_point_4, ball_point_5, ball_point_6,
    scene2, scene4, scene5, scene6;

$(document).ready(function($){
    animations();
});

$(document).on('pjax:success', function() {
    console.log(2);
    animations();
});

$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('#ball').removeClass('spinning');
        $('#ball').addClass('bounce-loop');
    }, 350));
});


function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 900;
    var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

function animations() {
    if(controller){
        console.log('destroy');
        controller.destroy('reset');
        controller = null;
        ball_point_1.destroy('reset');
        ball_point_2.destroy('reset');
        ball_point_3.destroy('reset');
        ball_point_4.destroy('reset');
        ball_point_5.destroy('reset');
       /* ball_point_6.destroy('reset');*/
        scene2.destroy('reset');
        scene4.destroy('reset');
        scene5.destroy('reset');
        scene6.destroy('reset');
        ball_point_1 = null;
        ball_point_2 = null;
        ball_point_3 = null;
        ball_point_4 = null;
        ball_point_5 = null;
      /*  ball_point_6 = null;*/
        scene2 = null;
        scene4 = null;
        scene5 = null;
        scene6 = null;
    }
    //console.log(1);
    if($('body').hasClass('front')){
        controller = new ScrollMagic.Controller();
        var timelineMain = new TimelineMax()
            .to('#circle__form', 0.5, {css: {scale: 1}, onComplete: function () {
                $('#circle__form').addClass('active');
                setTimeout(function () {
                    $('#circle__form .field__custom-btn').addClass('active');
                    /*$('#ball').removeClass('bounce');*/
                    if($('body').hasClass('front')){
                        $('body').css('overflow', 'visible');
                        if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
                        window.onmousewheel = document.onmousewheel = wheel;
                    }
                }, 950);
            }});

        var timeline1 = new TimelineMax()
            .to("#ball", 2,
                {onStart: function () {$('#ball').addClass('bounce');},onComplete: function () {}}
            );

        var timeline2 = new TimelineMax()
            .to(".video__block", 1,
                {
                    css: {scale: 1},
                    onStart: function () {},
                    onComplete: function () {
                        $('.video__block').addClass('active');
                    },
                    onReverseComplete: function () {}
                }
            );

        ball_point_1 = new ScrollMagic.Scene({triggerElement: ".hero__promo", duration: $("#section2").offset().top + 400 - $('.hero__promo').offset().top - 280, offset: 280})
            .on("enter", function(){
                $('#ball').addClass('spinning active');

                $('#ball').addClass('track-1');
            }).on("update", function(){
                if($('#ball').hasClass('track-1')){
                    var y = $(window).scrollTop();
                    var vh = $(window).outerHeight();
                    if(topy != 0){
                        delta = y - topy;
                    }
                    topy = y;
                    ball_sh = ball_sh + (delta / 1.5);
                    $('#ball.track-1').css({'top': y + vh/2 + "px", 'margin-left': ball_sh + "px"});
                }

                $('#ball').addClass('spinning');
            }).on('leave', function(event){
                $('#ball').removeClass('track-1');
                if(event.scrollDirection=== 'REVERSE'){
                    $('#ball').removeAttr('style');
                    ball_sh = -11;
                }
            }).addTo(controller);

        scene2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: 0, offset: 0})
            .setTween(timeline2)
            .on("enter", function(){

            }).addTo(controller);

        ball_point_2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: $("#step1").offset().top + 100 - $('#section2').offset().top - 400, offset: 400})
            .on("enter", function(){
                /* $('#ball').addClass('track-1');*/
                $('#ball').removeClass('track-1');
                $('#ball').addClass('track-2');
            }).on("update", function(event){
                if($('#ball').hasClass('track-2')){
                    var y = $(window).scrollTop();
                    var vh = $(window).outerHeight();
                    if(topy != 0){
                        delta = y - topy;
                    }
                    topy = y;
                    ball_sh = ball_sh - (delta / 0.8);

                    $('#ball.track-2').css({'top': y + vh/2 + "px", 'margin-left': ball_sh + "px"});
                }
            }).on('leave', function(){
                $('#ball').removeClass('track-2');
            }).addTo(controller);

        ball_point_3 = new ScrollMagic.Scene({triggerElement: "#step1", duration: $("#step2").offset().top + 100 - $('#step1').offset().top - 100, offset: 100})
            .on("enter", function(){
                /* $('#ball').addClass('track-1');*/
                $('#ball').removeClass('track-2');
                $('#ball').addClass('track-3');
            }).on("update", function(event){
                if($('#ball').hasClass('track-3')){
                    var y = $(window).scrollTop();
                    var vh = $(window).outerHeight();
                    if(topy != 0){
                        delta = y - topy;
                    }
                    topy = y;

                    ball_sh = ball_sh + (delta/0.8);

                    $('#ball.track-3').css({'top': y + vh/2 + "px", 'margin-left': ball_sh + "px"});
                }
            }).on('leave', function(){
                $('#ball').removeClass('track-3');
            }).addTo(controller);

        ball_point_4 = new ScrollMagic.Scene({triggerElement: "#step2", duration: $("#step3").offset().top + 200 - $('#step2').offset().top - 100, offset: 100})
            .on("enter", function(){
                /* $('#ball').addClass('track-1');*/
                $('#ball').removeClass('track-3');
                $('#ball').addClass('track-4');
            }).on("update", function(event){
                if($('#ball').hasClass('track-4')){
                    var y = $(window).scrollTop();
                    var vh = $(window).outerHeight();
                    if(topy != 0){
                        delta = y - topy;
                    }
                    topy = y;

                    ball_sh = ball_sh - (delta / 0.95);

                    $('#ball.track-4').css({'top': y + vh/2 + "px", 'margin-left': ball_sh + "px"});
                }
            }).on('leave', function(){
                $('#ball').removeClass('track-4');
            }).addTo(controller);

        ball_point_5 = new ScrollMagic.Scene({triggerElement: "#step3", duration: 100, offset: 200})
            .on("enter", function(event){
                /* $('#ball').addClass('track-1');*/
                $('#ball').removeClass('track-4');
                $('#ball').addClass('track-5');
                if(event.scrollDirection=== 'REVERSE'){
                    $('#ball').removeClass('bottom-state');
                    $('.hero__bottom').removeClass('active');
                }
            }).on("update", function(event){
                if($('#ball').hasClass('track-5')){
                    var y = $(window).scrollTop();
                    var vh = $(window).outerHeight();
                    if(topy != 0){
                        delta = y - topy;
                    }
                    topy = y;

                    ball_sh = ball_sh + (delta / 0.13);
                    $('#ball.track-5').css({'top': y + vh/2 + "px", 'margin-left': ball_sh + "px"});
                }
            }).on('leave', function(event){
                $('#ball').removeClass('track-5');
                if(event.scrollDirection=== 'FORWARD'){
                    $('#ball').addClass('bottom-state');
                    $('.hero__bottom').addClass('active');
                    $('.hero__bottom .ball__static-2').addClass('bounce-loop');
                    ball_sh = 365;
                }

            }).addTo(controller);

        var timeline3 = new TimelineMax()
            .to("#step1 .circle__box", 1,
                {
                    css: {scale: 1, opacity: 1},
                    onStart: function () {},
                    onComplete: function (){},
                    onReverseComplete: function () {}
                }
            );

        var timeline4 = new TimelineMax()
            .to("#step2 .circle__box", 1.3,
                {
                    css: {scale: 1, opacity: 1},
                    onStart: function () {},
                    onComplete: function (){},
                    onReverseComplete: function () {}
                }
            );

        var timeline5 = new TimelineMax()
            .to("#step3 .circle__box", 1.3,
                {
                    css: {scale: 1, opacity: 1},
                    onStart: function () {},
                    onComplete: function (){},
                    onReverseComplete: function () {}
                }
            ).to(".hero__bottom", 1.3,
                {
                    css: {scale: 1, opacity: 1},
                    onStart: function () {},
                    onComplete: function (){
                        $('#ball').removeClass('bounce-loop spinning');
                    },
                    onReverseComplete: function () {}
                }
            );

        scene4 = new ScrollMagic.Scene({triggerElement: "#section3", duration: 400, offset: -50})
            .setTween(timeline3)
            .on("enter", function(){

            }).on('leave', function(){

            }).addTo(controller);

        scene5 = new ScrollMagic.Scene({triggerElement: ".steps__list", duration: 400, offset: 300})
            .setTween(timeline4)
            .on("enter", function(){

            }).on('leave', function(){

            }).addTo(controller);

        scene6 = new ScrollMagic.Scene({triggerElement: ".steps__list", duration: 400, offset: 600})
            .setTween(timeline5)
            .on("enter", function(){
            }).on('leave', function(){
            }).addTo(controller);
    }
}