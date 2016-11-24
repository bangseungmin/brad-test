/**
 * Created by brad on 16. 11. 24..
 */
$(document).ready(function(){
    var $pointer = $('.list_slide_nav li');
    var flipsnap = Flipsnap('.list_slide');

    flipsnap.element.addEventListener('fspointmove', function(){
        $pointer.filter('.on').removeClass('on');
        $pointer.eq(flipsnap.currentPoint).addClass('on');
    }, false);

    var $next = $('.btn_next').click(function(){
         flipsnap.toNext();
    });

    var $prev = $('.btn_prev').click(function(){
        flipsnap.toPrev();
    });

    flipsnap.element.addEventListener('fspointmove', function(){
        $next.attr('disabled', !flipsnap.hasNext());
        $prev.attr('disabled', !flipsnap.hasPrev());
    }, false);

    $('.list_slide_nav li').on('click', function(){
        flipsnap.moveToPoint($(this).index());
    });







});