const isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
const isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const windowWidth = window.innerWidth;

if (isMacLike) $("body, html").addClass("isMacLike");
if (isSafari) $("body, html").addClass("isSafari");

function hold_all_scroll_page(fix = false) {
    if (fix) {
        window.addEventListener('wheel', holdScroll, { passive: false });
        window.addEventListener('DOMMouseScroll', holdScroll, { passive: false });
        document.addEventListener('touchmove', holdScroll, { passive: false });
    } else {
        window.removeEventListener('wheel', holdScroll, { passive: false });
        window.removeEventListener('DOMMouseScroll', holdScroll, { passive: false });
        document.removeEventListener('touchmove', holdScroll, { passive: false });
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
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
        document.addEventListener('touchmove', preventDefault, { passive: false });
        // $(document).on("touchmove", preventDefault)
    } else {
        window.removeEventListener('wheel', preventDefault, { passive: false });
        window.removeEventListener('DOMMouseScroll', preventDefault, { passive: false });
        document.removeEventListener('touchmove', preventDefault, { passive: false });
    }
}
var ts;
$(document).on('touchstart', function (e) {
    ts = e.originalEvent.touches[0].clientY;
});

function preventDefault(e) {
    e = e || window.event;
    var area;
    if ($(e.target).closest(".fancybox-content .modal-scroll").length) {
        area = $(e.target).closest(".fancybox-content .modal-scroll");
    } else if ($(e.target).closest(".main-menu .menu-scroll").length) {
        area = $(e.target).closest(".main-menu .menu-scroll");
    }else if ($(e.target).closest(".cart-toolbar .content").length) {
        area = $(e.target).closest(".cart-toolbar .content");
    } else {
        area = $(e.target);
    }
    var parentPopup = $(e.target).closest(".fancybox-content .modal-scroll, .main-menu .menu-scroll, .cart-toolbar .content").length || $(e.target).hasClass('.popupContent');
    if (!parentPopup) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }

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

const aosFadeArrDone = [
    '.main-gallery',
    '.main-thumbs',
    '.thumbs-wrap .slider-control',
    '.quote-wrap blockquote',
    '.intro-wrap .intro-pic',
    '.intro-wrap .text-wrap',
    '.card-slider .slider-title',
    '.card-slider .swiper',
    '.discuss-project .title',
    '.discuss-project .link',
    '.company-partners ol li',
    '.footer-nav .nav-items ol li a',
    '.company-social ol li'
];

let activeMenu = false;

$(document).ready(function () {
    $(document).on("click", ".extra-info ul li", function () {
        $(this).toggleClass('show').siblings().removeClass('show')
    });

    $(document).on("click", ".main-links ul li a.open-menu", function () {
        if ($(this).hasClass("active")) {
            activeMenu = false;
            hold_scroll_page(false);
            $(this).removeClass('active');
            $(".main-menu").removeClass('active')
        } else {
            activeMenu = true;
            hold_scroll_page(true);
            $(this).addClass('active');
            $(".main-menu").addClass('active')
        }
    });

    $(document).on("click", ".main-menu ul li.dropdown > a", function (e) {
        if (screenWidth < 992) {
            e.preventDefault();
            let parent = $(this).closest(".dropdown");
            if (parent.hasClass("open")) {
                parent.removeClass("open");
            } else {
                parent.addClass("open")
            }
        }
    });

    $(document).on("click", ".main-links ul li a.open-search", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $(".main-search").removeClass('active')
        } else {
            $(this).addClass('active');
            $(".main-search").addClass('active')
        }
    });

    if ($(".account-menu").length) {
        $(".account-menu .menu-list ul li").each(function () {
            if ($(this).hasClass("active")) {
                let text = $(this).find("a").html();
                $(this).closest(".account-menu").find(".active-item p").html(text);
            }
        })
    }

    $(document).on("click", ".account-menu .active-item", function (e) {
        if (screenWidth < 761) {
            let parent = $(this).closest(".account-menu");
            if (parent.hasClass("open")) {
                parent.removeClass("open");
            } else {
                parent.addClass("open")
            }
        }
    });
});