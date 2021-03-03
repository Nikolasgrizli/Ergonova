import $ from "jquery";

(function catalog(){
    let statusCatalogMenu = false,
        statusFirstLine = false,
        $catalogBtn = document.querySelector('.catalog-btn'),
        $firstLine = $catalogBtn.querySelectorAll('.first');

    if(typeof $catalogBtn === undefined) return;


    // $(document).on('click', $($catalogBtn), openMenu);
    $($catalogBtn).on('mouseenter', openMenu);
    $($catalogBtn).on('mouseleave', closeMenu);

    function openMenu(){
        $catalogBtn.classList.add('is-open');
        statusCatalogMenu = true;
        watchFirst();

    }
    function closeMenu(){
        $catalogBtn.classList.remove('is-open');
        statusCatalogMenu = false;
    }


    function watchFirst(){
        if(!$firstLine.length > 0) return;
        // $($firstLine).on('click', function(e){openMenuFirst(e)});
        $($firstLine).on('mouseover', function(e){openMenuFirst(e)});
        $($firstLine).on('mouseout', function(e){closeMenuFirst(e)});

    }


    function openMenuFirst(e){
        let $target = e.target.closest('.first');
        $target.classList.add('first-open');
        statusFirstLine = true;

    }
    function closeMenuFirst(e){
        let $targetEvent = e.target.closest('.first');

        $targetEvent.classList.remove('first-open');
        statusFirstLine = false;

    }


    // function watch(){
    //     $(document).on('click', function(e){

    //         if (e.target !== $catalogBtn || $catalogBtn.has(e.target).length === 0){
    //             closeMenu();
    //         }
    //     });
    //     watchFirst();
    // }

})();