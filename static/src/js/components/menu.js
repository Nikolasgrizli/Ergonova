import $ from "jquery";

(function catalog(){
    let statusCatalogMenu = false,
        statusFirstLine = false,
        $catalogBtn = document.querySelector('.catalog-btn'),
        $firstLine = $catalogBtn.querySelectorAll('.first'),
        $defaultFirst = $firstLine[0];

    if(typeof $catalogBtn === undefined) return;

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

        setTimeout(() => {
            $defaultFirst.classList.add('first-open');
        }, 100);

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



(function catalogMobile(){
    let statusCatalogMenuMob = false,
        statusCatalog = false,
        $catalogMobBtn = document.querySelector('.menu-trigger'),
        $mobNav = document.querySelector('.header__mobile'),
        $mobCatalog = document.querySelector('.nav-mobile'),
        $mobCatalogBtn = document.querySelector('.mobile-subnav-trigger .inner');

    if(typeof $catalogMobBtn === undefined || typeof $mobNav === undefined || window.matchMedia('(min-width:1024px').matches) return;


    $catalogMobBtn.addEventListener('click', function(){
        if(statusCatalogMenuMob === true){
            closeMenu();
        } else {
            openMenu();
        }
    });
    $mobCatalogBtn.addEventListener('click', function(){
        if(statusCatalog === true){
            closeCatalog();
        } else {
            openCatalog();
        }
    });


    function openMenu(){
        $mobNav.classList.add('is-open');
        document.body.classList.add('menu-open');
        statusCatalogMenuMob = true;
        window.hideMainScroll(true);
    }
    function closeMenu(){
        $mobNav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        statusCatalogMenuMob = false;
        window.hideMainScroll();
    }
    function openCatalog(){
        $mobCatalog.classList.add('is-open');
        statusCatalog = true;
    }
    function closeCatalog(){
        $mobCatalog.classList.remove('is-open');
        statusCatalog = false;
    }

})();
