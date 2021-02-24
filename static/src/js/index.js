import $ from "jquery";
// import './components/jquery.fullpage.extensions.min';
// import slick from 'slick-carousel';
// import './components/pixi.js';
// import {TimelineMax, Power3, TweenMax} from 'gsap';
// import './components/sliderDisp.js';
import { TimelineMax } from 'gsap';


// Main js file
let isTouch = false;
if ('ontouchstart' in document.documentElement) {
    isTouch = true;
}
document.body.className += isTouch ? ' touch' : ' no-touch';



// fixed header to top
let lastScrollTop = 0;
$(window).scroll(function () {
   const st = $(this).scrollTop();
   const $header = $('.layout__header');

   if($header){
       if($(window).scrollTop() > 10){
           $('.layout__header').addClass('is-fixed');
       } else {
           $('.layout__header').removeClass('is-fixed');
       }
        if(!$(window).width() > 1024){
            if (st > lastScrollTop){
                $('.layout__header').removeClass('is-fixed');
            } else if(st <= lastScrollTop) {
                if($(window).scrollTop() > 100){
                    $('.layout__header').addClass('is-fixed');
                } else {
                    $('.layout__header').removeClass('is-fixed');
                }
            }
            lastScrollTop = st;
        }
   }

});

//scroll to elem
function smoothScroll() {
    var links = $('a[href*="#"]:not([href="#"]):not(".link-with-hash")');

    function scrollTo($target) {
        $('html, body').animate({
            scrollTop: $target.offset().top - 100
        }, 500);
    }
    links.on('click', function(e) {
        var id = "#" + $(this).attr('href').split("#").slice(-1)[0];
        var $target = $(id);
        if ($target.length) {
            e.preventDefault();
            scrollTo($target);
        }
    });
}


let mobMenu = false;
if($(window).width() < 1024){
    mobMenu = true;
}

// menu animation example
// const nav = {
//     elem: {
//         items: $('.main-menu__body .menu-item'),
//     },
//     leave(){
//         const tl = new TimelineMax();
//         tl
//         .staggerFromTo(nav.elem.items, .4,
//             {
//                 opacity: 1
//             },
//             {
//                 opacity: 0
//             },
//             0.1
//         )

//         .fromTo(nav.elem.header, .4,
//             {
//                 opacity: 1
//             },
//             {
//                 opacity: 0
//             },
//         .4)
//     },
//     enter(){
//         const tle = new TimelineMax();
//         tle
//         .fromTo(nav.elem.wrapper, .4,
//             {
//                 transformOrigin: "50% 100%",
//                 scaleY: 0,
//                 opacity: 0
//             },
//             {
//                 scaleY: 1,
//                 opacity: 1
//             }
//         ,)
//     }
// }

// $(document).on('click', '.menu-trigger', function(){
//     $('body').addClass('menu-open');
//     nav.enter();
// });
// $(document).on('click', '.main-menu__wrapper .close-menu', function(){
//     nav.leave();
// });
// $(document).on('click', '.menu-item', function(){
//     nav.leave();
// });



$(function() {
    // nav.leave();
    smoothScroll();

});