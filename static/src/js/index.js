import $ from "jquery";
// import './components/jquery.fullpage.extensions.min';
// import slick from 'slick-carousel';
// import './components/pixi.js';
// import {TimelineMax, Power3, TweenMax} from 'gsap';
// import './components/sliderDisp.js';
import {
    TimelineMax
} from 'gsap';
import './components/formComponent';
import './components/accordionComponent';
import './components/slider';
import './components/menu';
import './components/modal';
import './components/video';


// Main js file
let isTouch = false;
if ('ontouchstart' in document.documentElement) {
    isTouch = true;
}
document.body.className += isTouch ? ' touch' : ' no-touch';



// fixed header to top
// let lastScrollTop = 0;
// $(window).scroll(function () {
//     const st = $(this).scrollTop();
//     const $header = $('.layout__header');

//     if ($header) {
//         if ($(window).scrollTop() > 10) {
//             $('.layout__header').addClass('is-fixed');
//         } else {
//             $('.layout__header').removeClass('is-fixed');
//         }
//         if (!$(window).width() > 1024) {
//             if (st > lastScrollTop) {
//                 $('.layout__header').removeClass('is-fixed');
//             } else if (st <= lastScrollTop) {
//                 if ($(window).scrollTop() > 100) {
//                     $('.layout__header').addClass('is-fixed');
//                 } else {
//                     $('.layout__header').removeClass('is-fixed');
//                 }
//             }
//             lastScrollTop = st;
//         }
//     }

// });

//scroll to elem
function smoothScroll() {
    var links = $('a[href*="#"]:not([href="#"]):not(".link-with-hash")');

    function scrollTo($target) {
        $('html, body').animate({
            scrollTop: $target.offset().top - 100
        }, 500);
    }
    links.on('click', function (e) {
        var id = "#" + $(this).attr('href').split("#").slice(-1)[0];
        var $target = $(id);
        if ($target.length) {
            e.preventDefault();
            scrollTo($target);
        }
    });
}


let mobMenu = false;
if ($(window).width() < 1024) {
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



(function location(){
    let statusLocationDropdown = null,
        $locationBtn = $('.header__location'),
        $textReplacer = $('.js-location-name'),
        $drops = $('.location__drop a');


    $($locationBtn).on('click', function(e){openDropdown(e)});
    $($drops).on('click', function(e){changeText(e)});

    function openDropdown(e){
        e.stopPropagation();
        console.log('open');
        $locationBtn.addClass('is-open');
        statusLocationDropdown = true;
        watch();

    }
    function closeDropdown(){
        console.log('close');
        $locationBtn.removeClass('is-open');
        statusLocationDropdown = false;
    }

    function changeText(e){
        e.stopPropagation();
        $textReplacer.text(e.target.innerText);
        closeDropdown();
    }




    function watch(){
        if(statusLocationDropdown === true){
            $(document).on('click', function(e){
                if (e.target !== $locationBtn || $locationBtn.has(e.target).length === 0 ){
                    closeDropdown();
                }
            });
        }
    }

})();

//tabs
(function(){
    const 
        tabHeaders = document.querySelectorAll('.product-nav a'),
        tabBodyes = document.querySelectorAll('.product-nab-tabs > .tab');


    if(tabHeaders.length > 0 && tabBodyes.length > 0){
        tabHeaders.forEach( tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                setActiveTab(tab);
            })
        })
    }

    function setActiveTab(tab){
        if(tab.classList.contains('is-active')) return;
        const 
            path = tab.getAttribute("href").slice(1),
            targetElem = document.getElementById(path);

        if(!!targetElem){
            
            tabHeaders.forEach( innerTab => {
                innerTab.closest('li').classList.remove('is-active'); 
            });
            tab.closest('li').classList.add('is-active');

            tabBodyes.forEach( innerBody => {
                innerBody.classList.remove('is-active'); 
            });
            targetElem.classList.add('is-active');
        }
    }

})();


//send form
window.nextPage = function(){
    alert('form sending...');
}


$(function () {
    // nav.leave();
    smoothScroll();

});