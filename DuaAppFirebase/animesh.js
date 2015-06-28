/**
 * Created by Hasnain on 11-Jun-15.
 */

$('.scroll a').click(function(e) {
    var goTo = $(this).attr('href'); // selects element that was clicked
    $("html,body").animate({scrollTop:$(goTo).offset().top +5}, 1000);
    e.preventDefault();
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    $('.page').each(function(i) {
        var posTop = $(this).position().top,
            h = $(this).height();

        if (posTop  <= windscroll && posTop + h > windscroll ) {
            $('.sidebar-nav li').removeClass('active_nav');
            $('.sidebar-nav li').eq(i).addClass('active_nav');
        }
    });
});

function show() {
    $('#loading').hide();
    $('#page-content-wrapper').css('visibility','visible');
};
window.onload = function(){
    vph = $(window).height();
    vpw = $(window).width();
    $('.container-full').height(vph);
    content_w = $('.content_work').height();
    content_c = $('.content_contact').height();
    content_h = $('.content_about').height();
    if(content_w>vph)
    {
        $('#work').css('height', 'auto');
    }
    else
    {
        $('#work').css('height', vph);
        if(vpw>767){
            var isiPad = navigator.userAgent.match(/iPad/i) != null;
            if(!isiPad){
                $('.content_work').css('padding-top',(vph-content_w)/2);
            }
        }
    }
    if(content_c>vph)
    {
        $('#contact').css('height', 'auto');
    }
    else
    {
        $('#contact').css('height', vph);
        if(vpw>767){

            $('.content_contact').css('padding-top',(vph-content_c)/2);
        }
    }
    if(content_h>vph)
    {
        $('#about').css('height', 'auto');
    }
    else
    {
        $('#about').css('height', vph);
        if(vpw>767){
            $('.content_about').css('padding-top',(vph-content_h)/2);
        }
    }
    show();
}
window.onresize = function(event)
{
    vph = $(window).height();
    vpw = $(window).width();
    $('.container-full').height(vph);
    content_w = $('.content_work').height();
    content_c = $('.content_contact').height();
    content_h = $('.content_about').height();
    if(content_w>vph)
    {
        $('#work').css('height', 'auto');
    }
    else
    {
        $('#work').css('height', vph);
        $('.content_work').css('padding-top',0);
        if(vpw>767){
            var isiPad = navigator.userAgent.match(/iPad/i) != null;
            if(!isiPad){
                $('.content_work').css('padding-top',(vph-content_w)/2);
            }	}
    }
    if(content_c>vph)
    {
        $('#contact').css('height', 'auto');
    }
    else
    {
        $('#contact').css('height', vph);
        $('.content_contact').css('padding-top',0);
        if(vpw>767){
            $('.content_contact').css('padding-top',(vph-content_c)/2);
        }
    }
    if(content_h>vph)
    {
        $('#about').css('height', 'auto');
    }
    else
    {
        $('#about').css('height', vph);
        $('.content_about').css('padding-top',0);
        if(vpw>767){
            $('.content_about').css('padding-top',(vph-content_h)/2);
        }
    }
}


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $('.side_name').toggleClass("active");
});


$(document).ready(function()
{
    setupRotator();
});
function setupRotator()
{
    if($('.textItem').length > 1)
    {
        $('.textItem:first').addClass('current').fadeIn(1000);
        setInterval('textRotate()', 3000);
    }
    if($('.textItem2').length > 1)
    {
        $('.textItem2:first').addClass('current').fadeIn(1000);
        setInterval('textRotate2()', 3000);
    }
}
function textRotate()
{
    var current = $('#quotes > .current');
    if(current.next().length == 0)
    {
        current.removeClass('current').fadeOut(1000);
        $('.textItem:first').addClass('current').fadeIn(1000);
    }
    else
    {
        current.removeClass('current').fadeOut(1000);
        current.next().addClass('current').fadeIn(1000);
    }
}
function textRotate2()
{
    var current = $('#quotes_small > .current');
    if(current.next().length == 0)
    {
        current.removeClass('current').fadeOut(1000);
        $('.textItem2:first').addClass('current').fadeIn(1000);
    }
    else
    {
        current.removeClass('current').fadeOut(1000);
        current.next().addClass('current').fadeIn(1000);
    }
}