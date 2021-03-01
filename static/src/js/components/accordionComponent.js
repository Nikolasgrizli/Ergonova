import $ from "jquery";

// class Accordion {
//     constructor(options){
//         this.wrapper = options.wrapper,
//         this.fields = this.wrapper.querySelectorAll(options.fields)
//     }
// }

function accordion(parent, val, elem){
    if(parent.length > 0){
        // console.log(elem);

        if (!val && val != 0){
            $(`.accordion__item .accordion__body`, parent).slideUp('200').closest('.accordion__item').removeClass('active');

        } else {
            const $elemParent = $(elem).closest('.accordion__item');

            if(elem !== undefined && $elemParent.is('.active')){
                $('.accordion__body', $elemParent).slideUp('200');
                $elemParent.removeClass('active');

            } else {

                $(`.accordion__item:not(:nth-child(${val+1})) .accordion__body`, parent).slideUp('200').closest('.accordion__item').removeClass('active');
                $(`.accordion__item:nth-child(${val+1}) .accordion__body`, parent).slideDown('200').closest('.accordion__item').addClass('active');
            }
        }



    }
}
$('.accordion__head').on('click', function(){
    const $parent = $($(this).closest('.accordion__column'));
    const index = $(this).closest('.accordion__item').index();
    accordion($parent ,index, $(this));
})

$(function(){
    accordion($('#accordion1 .accordion__column:nth-child(1)'),0);
    accordion($('#accordion1 .accordion__column:nth-child(2)'));
    accordion($('#accordion1 .accordion__column:nth-child(3)'));
    accordion($('#accordion1 .accordion__column:nth-child(4)'));
})