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
let quoteSlider, ingredientSlider, ingredientThumbs, productSlider, productThumbs;

$(document).ready(function () {
    $(".quote-slider .swiper-container").each(function (index, element) {
        let $this = $(this);
        quoteSlider = new Swiper($this, {
            slidesPerView: 2,
            spaceBetween: 0,
            grabCursor: true,
            loop: true,
            navigation: {
                nextEl: $(".next-slide2"),
                prevEl: $(".prev-slide2"),
                disabledClass: 'disabled'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    // spaceBetween: 15,
                },
                630: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    // spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    // spaceBetween: 20,
                },
            }
        });
    });

    ingredientThumbs = new Swiper('.ingredients-slider .thumbs-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        watchSlidesVisibility: true,
        grabCursor: false,
        loop: false,
        touchRatio: 0,
        pagination: {
            el: '.pagination',
            type: 'fraction',
            currentClass: 'pagination-current',
            totalClass: 'pagination-total',
            renderFraction: function (currentClass, totalClass) {
                return '<p><span class="' + currentClass + '"></span> of <span class="' + totalClass + '"></span></p>';
            }
        },

    });

    ingredientSlider = new Swiper('.ingredients-slider .main-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        watchSlidesVisibility: true,
        loop: false,
        slideToClickedSlide: false,
        thumbs: {swiper: ingredientThumbs},

        navigation: {
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
            disabledClass: 'disabled'
        },
        pagination: 
		{
			el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
		},
    });




    productThumbs = new Swiper('#shopify-section-product-template .product-slider .thumbs-slider .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        direction: 'vertical',
        watchSlidesVisibility: true,
        grabCursor: false,
        loop: false,
        touchRatio: 0,
    });

    productSlider = new Swiper('#shopify-section-product-template .product-slider .main-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        watchSlidesVisibility: true,
        loop: false,
        slideToClickedSlide: false,
        thumbs: {swiper: productThumbs},
    });

    productThumbsAllInOne = new Swiper('#product-thumbs-slider-sc', {
        slidesPerView: 4,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        grabCursor: true,
        loop: false,
        navigation: {
            nextEl: '#product-thumbs-slider-nav-next',
            prevEl: '#product-thumbs-slider-nav-prev',
            disabledClass: 'disabled'
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });

    productSliderAllInOne = new Swiper('#product-main-slider-sc', {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: true,
        watchSlidesVisibility: false,
        loop: false,
        slideToClickedSlide: true,
        thumbs: {swiper: productThumbsAllInOne},
        breakpoints: {
            0: {
                pagination: {
                    el: '.product-slider .swiper-pagination',
                    clickable: 'true',
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '#product-main-slider-nav-next',
                    prevEl: '#product-main-slider-nav-prev',
                    disabledClass: 'disabled'
                }
            },
            760: {
                pagination: {},
                navigation: {}
            }
        }
    });

    productSliderAllInOne.on('slideChange', function () {
        $('iframe#product-video-iframe').attr( 'src', function ( i, val ) { return val; });
      });

      let isFirstClick = true;
      $(".variant-box").click(function() {
          if (isFirstClick) {
              isFirstClick = false;
          }
          else {
              // Slide to Variant Image
              let slideIndex = productSliderAllInOne.slides.length - $('input[name=pack]:checked', '#CTAForm').attr('index');
              productSliderAllInOne.slideTo(slideIndex);
          }
      });

    reviewsSliderAllInOne = new Swiper('.product-template-all-in-one .reviews-section .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        watchSlidesVisibility: false,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.reviews-section .swiper-button-next',
            prevEl: '.reviews-section .swiper-button-prev',
            disabledClass: 'disabled'
        },
        breakpoints: {
            760: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    videoReviewsSliderAllInOne = new Swiper('.product-template-all-in-one .video-reviews-section .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        centeredSlides: true,
        grabCursor: true,
        slideToClickedSlide: true,
        loop: false,
        navigation: {
            nextEl: '.video-reviews-section .swiper-button-next',
            prevEl: '.video-reviews-section .swiper-button-prev',
            disabledClass: 'disabled'
        }
    });

    ingredientsThumbsSliderAllInOne = new Swiper('.product-template-all-in-one .ingredients-section .ingredients-thumbs-slider.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        breakpoints: {
            760: {
                slidesPerView: 7,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 9,
                centeredSlides: false,
            }
        }
    });

    ingredientsMainSliderAllInOne = new Swiper('.product-template-all-in-one .ingredients-section .ingredients-main-slider.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        watchSlidesVisibility: false,
        loop: false,
        autoHeight: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.ingredients-section .swiper-button-next',
            prevEl: '.ingredients-section .swiper-button-prev',
            disabledClass: 'disabled'
        },
        thumbs: {swiper: ingredientsThumbsSliderAllInOne}
    });

    faqIngredientsMainSliderAllInOne = new Swiper('.product-template-all-in-one .faq-section .ingredients-main-slider.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        watchSlidesVisibility: false,
        loop: false,
        autoHeight: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.faq-section .swiper-button-next',
            prevEl: '.faq-section .swiper-button-prev',
            disabledClass: 'disabled'
        }
    });

 $(".related-posts .posts-list .swiper-container")
 .each(function (index, element) {
        let $this = $(this);
        quoteSlider = new Swiper($this, {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            loop: false,
            navigation: {
                nextEl: $(".next-slide"),
                prevEl: $(".prev-slide"),
                disabledClass: 'disabled'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                641: {
                    slidesPerView: 2,
                },
                761: {
                    slidesPerView: 3,
                }
            }
        });
    });
});
const aosFadeArrDone = [
    '.main-gallery',
    '.main-thumbs',
    '.thumbs-wrap .slider-control',
    '.quote-wrap blockquote',
    '.intro-wrap .intro-pic',
    '.intro-wrap .text-wrap',
    '.card-slider .slider-title',
    '.card-slider .swiper-container',
    '.discuss-project .title',
    '.discuss-project .link',
    '.company-partners ol li',
    '.footer-nav .nav-items ol li a',
    '.company-social ol li'
];

function setDelayTransform(divs, total_delay = 300) {
    $(divs).each(function (i) {
        $(this).css("transition-delay", total_delay + "ms").attr("data-delay", total_delay);
        total_delay += 100;
    });
    return total_delay;
}

function aos_init() {
    $(".aos").attr("data-aos", "fade-up");
    $(aosFadeArrDone.join(',')).addClass("aos").attr("data-aos", "fade-up");
    setDelayTransform(".company-partners ol li", 0);
    setDelayTransform(".footer-nav .nav-items ol li a", 0);
    setDelayTransform(".company-social ol li", 0);

    setTimeout(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-out-quad"
        });
    }, 500);
}

let screenWidth = window.innerWidth;

$(window).on('resize', function () {
    screenWidth = window.innerWidth;
});

function stickyHeader() {
    const element = document.querySelector("header");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (element.classList && winScroll > 0) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
}

window.onscroll = function () {
    stickyHeader()
};

let activeMenu = false;

$(document).ready(function () {
    // aos_init();

    $('.open-modal[data-fancybox]').fancybox({
        closeExisting: true,
        buttons: ['close'],
        afterShow: function () {
            if (!activeMenu) {
                hold_scroll_page(true);
            }
        },
        afterClose: function () {
            if (!activeMenu) {
                hold_scroll_page(false);
            }
        }
    });

    $(document).on("click", ".qty-control a", function (e) {
        e.preventDefault();
        let newVal, $button = $(this),
            oldValue = $button.closest(".qty-control").find("input").val();
        if ($button.attr('data-act') === "+") {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue - 1);
            } else {
                newVal = 1;
            }
        }
        $button.closest(".qty-control").find("input").val(newVal);
    });

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
    $(document).on("click", ".faq-list ul li .question", function (e) {
            let parent = $(this).closest("li");
            if (parent.hasClass("open")) {
                parent.removeClass("open");
                parent.find(".answer").slideUp();
            } else {
                parent.addClass("open");
                parent.find(".answer").slideDown();

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
            //если нажата кнопка мышки:
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
            //если нажата кнопка мышки:
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
                //если нажата кнопка мышки:
                var offset = event.clientX;
            }
            $(this).find(".scroll-wrap").scrollLeft(scrollLeft + (touchstart - offset)); //отменяем "всплытие сообщений", чтобы не вызывался клик на тач-устройствах.
            event.stopPropagation();
            event.preventDefault();
        }
    });


    $(document).on("click", ".locations-map .map-info", function (e) {
        let par = $(this).closest(".locations-map");
        let country = $(this).data("country");
        let name = $(this).data("name");
        let elmW = par.innerWidth();
        let elmH = par.innerHeight();
        let notice = $(".info-box");
        let parTop = par.offset().top;
        let parLeft = par.offset().left;
        let circlePos = setOffsetPosition($(this));
        let xPos = ((circlePos.left - notice.innerWidth()) - parLeft) / elmW;
        let yPos = (circlePos.top + 20 + ($(this).innerHeight() / 2) - parTop) / elmH;

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            notice.hide();
        } else {
            $(this).addClass("active").siblings().removeClass("active");
            notice.find(".country p").html(country);
            notice.find(".name p").html(name);
            if (xPos < 0) {
                xPos = (circlePos.left + 18 + $(this).innerWidth() - parLeft) / elmW;
                notice.addClass("left")
            } else {
                notice.removeClass("left")
            }
            notice.css({
                top: yPos * 100 + "%",
                left: xPos * 100 + "%"
            });
            notice.show();
        }
    });

    function setOffsetPosition($el) {
        let rect = $el[0].getBoundingClientRect();
        let win = $el[0].ownerDocument.defaultView;
        let elW = $el.width();
        let elH = $el.height();
        let marginB = 35;
        return {
            top: rect.top + win.pageYOffset - (elH + marginB),
            left: rect.left + win.pageXOffset - (elW / 2)
        };
    };

    $(window).resize(function () {
        $(".locations-map .info-box").hide();
    });


});
var map;
var markers_map = [];
var markers = [];

if ($(".locator-list").length) {
    locList = $(".locator-list ul li");
    locList.each(function () {
        markers_map.push([$(this).data("title"), $(this).data("lat"), $(this).data("lng")]);
    });
    console.log(markers_map)
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // center: {lat: 50.448669, lng: 30.517841},
        zoom: 10,
        disableDefaultUI: true,
        // zoomControl: false,

        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{"color": "#dedede"}, {"lightness": 21}]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
        }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
        }],
    });
    var markersBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers_map.length; i++) {
        var markerPosition = new google.maps.LatLng(markers_map[i][1], markers_map[i][2]);
        markersBounds.extend(markerPosition);
        var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            title: markers_map[i][0],
            icon: '../images/marker.svg',
        });
        markers.push(marker);
    }
    // map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));
    map.setCenter(markersBounds.getCenter());
}


$(document).ready(function () {
    if ($(".store-locator").length > 0) {
        $(".store-locator").after('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6sLxnYQ-FWAeI8mmJpv2LNinG0u-H5aw&callback=initMap"></script>');
    }
});
//# sourceMappingURL=maps/common.js.map



