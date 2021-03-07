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
        setDefault();
    }


    function setDefault(){
        $defaultFirst.classList.add('first-open');
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


})();



(function catalogMobile(){
    let statusCatalogMenuMob = false,
        statusCatalog = false,
        $catalogMobBtn = document.querySelector('.menu-trigger'),
        $mobNav = document.querySelector('.header__mobile'),
        $mobCatalog = document.querySelector('.nav-mobile'),
        $mobCatalogBtnTo = document.querySelector('.trigger-mobile-to'),
        $mobCatalogBtnFrom = document.querySelector('.trigger-mobile-from'),
        $firstTrigger = document.querySelectorAll('.first-trigger');

    if(typeof $catalogMobBtn === undefined || typeof $mobNav === undefined || window.matchMedia('(min-width:1024px').matches) return;


    $catalogMobBtn.addEventListener('click', function(){
        if(statusCatalogMenuMob === true){
            closeMenu();
        } else {
            openMenu();
        }
    });
    $mobCatalogBtnTo.addEventListener('click', function(){
        openCatalog();
    });
    $mobCatalogBtnFrom.addEventListener('click', function(){
        closeCatalog();
    });

    $firstTrigger.forEach( trigger => {
        trigger.addEventListener('click', function(e){
            e.stopPropagation();
            e.preventDefault();
            this.closest('.first').classList.toggle('is-open');
        });
    })



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

    function _getAbsoluteHeight(el) {
        el = (typeof el === 'string') ? document.querySelector(el) : el;
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles['marginTop']) +
                     parseFloat(styles['marginBottom']);
        return Math.ceil(el.offsetHeight + margin);
      }

    function setMobMenuHeight(){
        setTimeout(() => {
            let
                headerH = _getAbsoluteHeight('.header__container'),
                mobFormH = _getAbsoluteHeight('.header__mobile .mob-form.form-search'),
                headerMobCallbackH = _getAbsoluteHeight('.header__mobile .header__phone-callback'),
                windowH = window.innerHeight;

            if(headerH !== 0 && mobFormH !== 0 && headerMobCallbackH !== 0){
                document.documentElement.style.setProperty('--maxMobHeaderMenuHeight', windowH - (headerH+mobFormH+headerMobCallbackH) + 'px');
            }

        }, 200);
    }

    setMobMenuHeight();

    window.addEventListener("orientationchange", function() {
        setMobMenuHeight();
    });

})();
