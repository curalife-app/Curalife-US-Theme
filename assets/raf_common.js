const isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
const isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const windowWidth = window.innerWidth;
const mobile = device.mobile();
const tablet = device.tablet();

if (isMacLike) $("body, html").addClass("isMacLike");
if (isSafari) $("body, html").addClass("isSafari");

function hold_all_scroll_page(fix = false) {
    if (fix) {
        window.addEventListener('wheel', holdScroll, {passive: false});
        window.addEventListener('DOMMouseScroll', holdScroll, {passive: false});
        document.addEventListener('touchmove', holdScroll, {passive: false});
    } else {
        window.removeEventListener('wheel', holdScroll, {passive: false});
        window.removeEventListener('DOMMouseScroll', holdScroll, {passive: false});
        document.removeEventListener('touchmove', holdScroll, {passive: false});
    }
}

function holdScroll(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
    return false;
}


function hold_scroll_page(fix = false) {
    if (fix) {
        window.addEventListener('wheel', preventDefault, {passive: false});
        window.addEventListener('DOMMouseScroll', preventDefault, {passive: false});
        document.addEventListener('touchmove', preventDefault, {passive: false});
        // $(document).on("touchmove", preventDefault)
    } else {
        window.removeEventListener('wheel', preventDefault, {passive: false});
        window.removeEventListener('DOMMouseScroll', preventDefault, {passive: false});
        document.removeEventListener('touchmove', preventDefault, {passive: false});
    }
}

var ts;
$(document).on('touchstart', function (e) {
    ts = e.originalEvent.touches[0].clientY;
});

function preventDefault(e) {
    e = e || window.event;
    var area;
    if ($(e.target).closest(".popupContent").length) {
        area = $(e.target).closest(".popupContent");
    } else if ($(e.target).closest(".menu-wrap .scroll-wrap").length) {
        area = $(e.target).closest(".menu-wrap .scroll-wrap");
    } else if ($(e.target).closest(".cart-sidebar .scroll-wrap").length) {
        area = $(e.target).closest(".cart-sidebar .scroll-wrap");
    } else if ($(e.target).closest(".modal-scroll").length) {
        area = $(e.target).closest(".modal-scroll");
    } else {
        area = $(e.target);
    }
    var parentPopup = $(e.target).closest(".popupContent, .menu-wrap .scroll-wrap, .cart-sidebar .scroll-wrap, .modal-scroll").length || $(e.target).hasClass('.popupContent');
    if (!parentPopup) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
    /*if ($(e.target).closest(".chosen-container").length) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }*/
    var delta = e.deltaY || e.detail || e.wheelDelta;
    if (e.type == "touchmove") {
        var tob = e.changedTouches[0], // reference first touch point for this event
            offset = parseInt(tob.clientY);
        if (ts < offset - 5) {
            delta = -100;
        } else if (ts > offset + 5) {
            delta = 100;
        }
    }
    if (delta <= 0 && area[0].scrollTop <= 0) {
        e.preventDefault();
    }
    if (delta > 0 && area[0].scrollHeight - area[0].clientHeight - area[0].scrollTop <= 1) {
        e.preventDefault();
    }
}
let ingredientsSlider, ingredientsThumbs, testimonialsSlider;
$(document).ready(function () {

    ingredientsThumbs = new Swiper('.ingredients-slider .swiper-container.thumbs-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        preloadImages: true,
        watchSlidesVisibility: true,
        loop: true,
        loopAdditionalSlides: 1,
        touchRatio: 0,
        // lazy: true
        lazy: {
            //  tell swiper to load images before they appear
            loadPrevNext: true,
            // amount of images to load
            loadPrevNextAmount: 20,
        },

    });

    ingredientsSlider = new Swiper('.ingredients-slider .swiper-container.main-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        preloadImages: true,
        watchSlidesVisibility: true,
        loop: true,
        loopAdditionalSlides: 1,
        touchRatio: 0,
        slideToClickedSlide: true,
        thumbs: {swiper: ingredientsThumbs},
        // lazy: true
        lazy: {
            //  tell swiper to load images before they appear
            loadPrevNext: true,
            // amount of images to load
            loadPrevNextAmount: 20,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });

    testimonialsSlider = new Swiper('.testimonials-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.testimonials-slider .button-next',
            prevEl: '.testimonials-slider .button-prev',
        },
    });

});
var screenWidth = window.innerWidth;

$(window).on('resize', function () {
    screenWidth = window.innerWidth;
});


$(document).ready(function () {
    window.onload = function () {
        $('.appeal-data').each(function () {
            if (!$(this).find('.more-text').hasClass('short-view') && $(this).find('.more-text .text .wrap').innerHeight() > 338) {
                $(this).find('.more-text').addClass('short-view');
            }
        })
    };

    $(window).on('resize', function () {
        if (screenWidth < 701) {
            $('.appeal-data').each(function () {
                if (!$(this).find('.more-text').hasClass('short-view') && $(this).find('.more-text .text .wrap').innerHeight() > 338) {
                    $(this).find('.more-text').addClass('short-view');
                }
                if ($(this).find('.more-text').hasClass('short-view') && $(this).find('.more-text .text .wrap').innerHeight() <= 338) {
                    $(this).find('.more-text').removeClass('short-view')
                }
            })
        }
    });

    $(document).on("click", ".appeal-data .more-text.short-view .more", function () {
        let parent = $(this).closest(".more-text");
        if (parent.hasClass("open")) {
            parent.removeClass("open");
        } else {
            parent.addClass("open");
        }
    });

    $(document).on("click", ".advisory-wrap .more", function () {
        let parent = $(this).closest(".advisory-wrap");
        if (parent.hasClass("open")) {
            parent.removeClass("open");
        } else {
            parent.addClass("open");
        }
    });


    var move_access = false;
    var scrollLeft;
    $(".touch-scroll").on("mousedown touchstart", function (event) {
        move_access = true;
        if (event.type == "touchstart") {
            var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
            var offset = touch.clientX;
        } else {
            //ÐµÑÐ»Ð¸ Ð½Ð°Ð¶Ð°Ñ‚Ð° ÐºÐ½Ð¾Ð¿ÐºÐ° Ð¼Ñ‹ÑˆÐºÐ¸:
            var offset = event.clientX;
        }
        touchstart = offset;
        scrollLeft = $(this).find(".scroll-wrap").scrollLeft();
        console.log(scrollLeft);
    });
    $(document).on("mouseup touchend", function (event) {
        move_access = false;
        if (event.type == "touchend") {
            var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
            var offset = touch.clientX;
        } else {
            //ÐµÑÐ»Ð¸ Ð½Ð°Ð¶Ð°Ñ‚Ð° ÐºÐ½Ð¾Ð¿ÐºÐ° Ð¼Ñ‹ÑˆÐºÐ¸:
            var offset = event.clientX;
        }
        touchstart = offset;
    });
    $(".touch-scroll").on("mousemove touchmove", function (event) {
        if (move_access) {
            if (event.type == "touchmove") {
                var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                var offset = touch.clientX;
            } else {
                //ÐµÑÐ»Ð¸ Ð½Ð°Ð¶Ð°Ñ‚Ð° ÐºÐ½Ð¾Ð¿ÐºÐ° Ð¼Ñ‹ÑˆÐºÐ¸:
                var offset = event.clientX;
            }
            $(this).find(".scroll-wrap").scrollLeft(scrollLeft + (touchstart - offset)); //Ð¾Ñ‚Ð¼ÐµÐ½ÑÐµÐ¼ "Ð²ÑÐ¿Ð»Ñ‹Ñ‚Ð¸Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¹", Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ðµ Ð²Ñ‹Ð·Ñ‹Ð²Ð°Ð»ÑÑ ÐºÐ»Ð¸Ðº Ð½Ð° Ñ‚Ð°Ñ‡-ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°Ñ….
            event.stopPropagation();
            event.preventDefault();
        }
    });
  

});

let storiesSlider, insideSlider;

$(document).ready(function () {  
    $(".choose-package .data .package-info").each(function(i) {
        $(this).addClass("prod_"+ i +"");
        $(this).find(".options-list label input[type='radio']").attr("name", "prod_"+ i +"");
        $(this).find(".options-list label input[type='radio'].checked").attr("checked", "checked")
    });
  
    
    $(document).on("click", ".stories-slider .stories-video .play-video button", function () {
        let src = $(this).parent(".play-video").data('src');
        $(".stories-slider .stories-video iframe").remove();
        $(this).closest(".stories-video").append('<iframe src="' + src + '?;autoplay=1&mute=1&enablejsapi=1&loop=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>');
    });

    $(document).on("change", ".choose-package .data .package-info .options-wrap .options-list label input[type=radio]", function () {
        let parent = $(this).parent("label");
        let index = parent.index();
        let activeOption = parent.find('span.name').text();
        let tab = $(this).closest(".options-wrap").find('.option-item');
        let drop = $(this).closest('.package-drop').find('.active-option');
        tab.eq(index).addClass('active').siblings().removeClass('active');
        $(this).closest(".data").find(".prod-img .img-list span").eq(index).addClass('active').siblings().removeClass('active');
        $(this).closest(".data").find(".prod-img .label-wrap .info-label.price span.current-price").eq(index).addClass('active').siblings().removeClass('active');
        drop.children('p').text(activeOption);
        if (drop.hasClass("open")) {
            drop.removeClass('open');
        }
    });

    $(document).on("click", ".choose-package .data .package-info .options-wrap .package-drop .active-option", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });

    $(document).on("click", ".faq-list ul li .question h4", function () {
        let parent = $(this).parent(".question");
        if (parent.hasClass("active")) {
            parent.removeClass('active');
            $(this).closest('li').find('.answer').slideUp()
        } else {
            parent.addClass('active');
            $(this).closest('li').find('.answer').slideDown()
        }
    });

    storiesSlider = new Swiper('.stories-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        pagination: {
            el: '.pagination',
            type: 'bullets',
            bulletClass: 'bullet',
            bulletActiveClass: 'active',
            clickable: true,
        },
    });

    insideSlider = new Swiper('.inside-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        pagination: {
            el: '.pagination',
            type: 'bullets',
            bulletClass: 'bullet',
            bulletActiveClass: 'active',
            clickable: true,
        },
    });
});