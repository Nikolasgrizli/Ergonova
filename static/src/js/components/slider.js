import $ from "jquery";
import slick from 'slick-carousel';


// product carousel
let $showcaseSlider = $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 200,
    asNavFor: '.slider-nav',
    fade: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          dots: true
        }

      },
    ]
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    vertical: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg class="svg-icon"><use xlink:href="#arrow-up"></use></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg class="svg-icon"><use xlink:href="#arrow-down"></use></svg></button>',
    focusOnSelect: true,
    draggable: true,
    verticalSwiping: true,
});

// let $slideOnHover = $('.slider-nav .slick-slide');
// var sliderTimeout;

// function changeSlideNext(index) {
//     // console.log(parseInt(index));
//     sliderTimeout = setTimeout(function () {
//         // recursiveSlideChangeNext();
//         $showcaseSlider.slick('slickGoTo',parseInt(index),false);
//     }, 500);

// }
// $showcaseSlider.on('afterChange', function(){window.clearTimeout(sliderTimeout)})


// $slideOnHover.on('mouseenter', function (e) {
//     let index = e.target.closest('.slick-slide').dataset.slickIndex;

//     if(typeof index !== undefined){

//         changeSlideNext(index);
//     } else {
//         console.log('error');
//     }
// });
