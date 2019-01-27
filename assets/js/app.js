import 'parallax-js/dist/parallax.min.js';

let app = {
    init() {
        func.jsScale();
        // func.jsList();
        // func.jsHeaderNotification();
        // func.jsHeaderSearch();
        // func.jsHeaderMenu();
        // func.jsHeaderMenuLink();
        // func.jsBackgroundColor();
        // func.jsAutofocus();
        // func.jsHeaderScrollbar();
        // func.jsScrollbar();
        // func.jsSelect();
        // func.jsFancyBox();
        // func.jsClassToggle();
        // func.jsStopPropagation();
        // func.jsTextareaAutosize();
        // func.jsSmallTagRemove();
    },
    load() {

    },
    resize() {
        func.jsScale();
    },
    scroll() {

    },
    minWindowWidth: 1920
    //minWindowWidth: 1430
};

let func = {
    jsScale() {
        let currentWidth = document.documentElement.clientWidth;
        let $el = $('body');
        let $elContent = $('.wrapper');
        let $elScaleMinHeight = $('.js-scale-min-height');

        if (currentWidth < app.minWindowWidth) {

            /*$el.css({
                'transform': `scale(${currentWidth / app.minWindowWidth})`
            });

            $elContent.css({
                'max-width': $elContent[0].scrollWidth * currentWidth / app.minWindowWidth,
                //'overflow': 'hidden'
            });*/

            //$('html, body').css('font-size', `${(currentWidth / app.minWindowWidth) * 100}%`);
            $('html, body').css('font-size', `${(currentWidth / app.minWindowWidth) * 17}px`);

            /*$elScaleMinHeight.css({
                'min-height': document.documentElement.scrollHeight * app.minWindowWidth / currentWidth
            });*/
        } else {

            $('html, body').css('font-size', '');

            $el.css({
                'transform': ''
            });

            $elContent.css({
                'max-height': '',
                'overflow': ''
            });

            $elScaleMinHeight.css({
                'min-height': ''
            });
        }
    },

    // jsList() {
    //   console.log('lol');
      // $(".js-select").click(function(){
      //     $(".menu__select--select").toggleClass("show");
      // });
      //
      // $(document).mouseup(function(e){
      //   let $target = $(e.target);
      //   if ($target.closest(".menu__select--select").length === 0) {
      //     $(".menu__select--select").removeClass("show");
      //   }
      // });
      // let $outerList = $('.js-select');
      // let $innerList = $('.menu__select--select');
      //
      // $outerList.on('click', () => {
      //     $innerList.toggleClass('menu__select--active');
      // });

        // $(document).on('click', (e) => {
        //     if ($(e.target).closest($innerList).length <= 0) {
        //         $innerList.removeClass('menu__select--active');
        //     }
        // });
    }
    // jsHeaderSearch() {
    //     let $header = $('.header');
    //     let $headerBottom = $('.header__bottom');
    //     let $headerSearchToggler = $('.js-header-search-toggler');
    //
    //     $headerSearchToggler.on('click', () => {
    //         $header.toggleClass('header--search-opened');
    //     });
    //
    //     $(document).on('click', (e) => {
    //         if ($(e.target).closest($headerBottom).length <= 0 && $(e.target).closest($headerSearchToggler).length <= 0) {
    //             $header.removeClass('header--search-opened');
    //         }
    //     });
    // },
    // jsHeaderMenu() {
    //     let $header = $('.header');
    //     let $menuToggler = $('.js-header-menu-toggler');
    //     let $menuContent = $('.js-header-menu-content');
    //
    //     $menuToggler.on('click', (e) => {
    //         $header.toggleClass('header--menu-opened');
    //         e.stopImmediatePropagation();
    //     });
    //
    //     $(document).on('click', (e) => {
    //         if ($(e.target).closest($menuContent).length <= 0) {
    //             $header.removeClass('header--menu-opened');
    //
    //             $('.js-header-menu-link-more').removeClass('hover-bg');
    //             $('.js-header-menu-link').removeClass('hover-bg');
    //         }
    //     });
    // },
    // jsHeaderMenuLink() {
    //     let $el = $('.js-header-menu-link');
    //
    //     $el.on('mouseleave', (e) => {
    //         let $currentEl = $(e.currentTarget);
    //         $currentEl.addClass('hover');
    //
    //         setTimeout(() => {
    //             $el.removeClass('hover');
    //         }, 300);
    //     });
    //
    //     $('.header__menu-nav-sublist').on('mouseout', (e) => {
    //
    //         let $currentTarget = $(e.currentTarget);
    //         let $relatedTarget = $(e.relatedTarget);
    //
    //         if ($(e.relatedTarget).is('.header__menu-nav')) {
    //             $currentTarget.closest($el).addClass('hover-bg');
    //         } else {
    //             $el.removeClass('hover-bg');
    //         }
    //     });
    // },
    // jsBackgroundColor() {
    //     let $jsBackgroundColor = $('.js-background-color-chooser');
    //
    //     $jsBackgroundColor.on('click', (e) => {
    //
    //         let $el = $(e.currentTarget);
    //         let {target, color, currentClass} = $el.data('background');
    //
    //         $(target).css('background-color', color);
    //
    //         $el.closest('.js-background-color-chooser-container').find($jsBackgroundColor).removeClass(currentClass);
    //         $el.addClass(currentClass);
    //     });
    // },
    // jsHeaderScrollbar() {
    //     let $el = $('.js-header-scrollbar');
    //
    //     $el.on('mousewheel wheel', function (e) {
    //         /*let currentWidth = document.documentElement.clientWidth;*/
    //
    //         /*if (currentWidth >= app.minWindowWidth) {*/
    //         e.preventDefault();
    //         e.stopImmediatePropagation();
    //
    //         let scrollTop = $(this).scrollTop();
    //         let delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
    //
    //         $(this).scrollTop(scrollTop + delta);
    //         /*}*/
    //     });
    // },
    // jsScrollbar() {
    //     let els = document.querySelectorAll('.js-scrollbar');
    //
    //     for (let el of els) {
    //         Scrollbar.init(el);
    //     }
    // },
    // jsSelect() {
    //     $('.js-select').select2({
    //         minimumResultsForSearch: -1,
    //         containerCssClass: 'raif-select__select',
    //         dropdownCssClass: 'raif-select__results',
    //         width: '100%',
    //         theme: 'raif-select'
    //     });
    // },
    // jsAutofocus() {
    //     let $el = $('.js-autofocus');
    //
    //     $el.focus();
    // },
    // jsFancyBox() {
    //     $('[data-fancybox="gallery"]').fancybox({
    //         loop: true
    //     });
    // },
    // jsClassToggle() {
    //     let $el = $('.js-class-toggle');
    //
    //     $el.on('click', (e) => {
    //
    //         let $currentEl = $(e.currentTarget);
    //         let $target = $($currentEl.data('class-toggle-target'));
    //         let className = $currentEl.data('class-toggle');
    //
    //         $target.toggleClass(className);
    //     })
    // },
    // jsStopPropagation() {
    //     let $el = $('.js-stop-propagation');
    //
    //     $el.on('click', (e) => {
    //
    //         e.stopImmediatePropagation()
    //     })
    // },
    // jsTextareaAutosize() {
    //     let $el = $('.js-textarea-autosize');
    //
    //     $el.each(function () {
    //         this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    //     }).on('input', function () {
    //         this.style.height = 0;
    //         this.style.height = (this.scrollHeight) + 'px';
    //     });
    // },
    // jsSmallTagRemove() {
    //     let $el = $('.js-small-tag-remove');
    //
    //     $el.on('click', (e) => {
    //
    //         let $currentEl = $(e.currentTarget);
    //         let $currentElContainer = $currentEl.closest('.js-small-tag');
    //
    //         $currentElContainer.animate({
    //             opacity: 0.25,
    //             paddingLeft: 0,
    //             paddingRight: 0,
    //             width: 'toggle'
    //         }, 300, function () {
    //             // Animation complete.
    //         });
    //     })
    // }
// };

$(function () {

    app.init();

    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    } else {
        window.dispatchEvent(new Event('resize'));
    }

    $(window).on('load', function () {
        app.load();
    });

    $(window, document).on('resize', function () {
        app.resize();
    });

    $(window).on('scroll', function () {
        app.scroll();
    });

});
