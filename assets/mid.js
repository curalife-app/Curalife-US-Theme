$(document).ready(function () {
    /*===== SWIPER CAROUSEL =====*/
    let mySwiper1 = new Swiper(".reviews__clients", {
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".reviews__slider-bullets",
            type: "bullets",
            clickable: true,
            bulletClass: "bullet",
            bulletActiveClass: "active",
        },
          navigation: {
            nextEl: ".reviews__slider-button.next",
            prevEl: ".reviews__slider-button.prev",
        },
        keyboard: true,
    });
    let componentThumbs = new Swiper(".thumbs-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        preloadImages: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        loopAdditionalSlides: 1,
        centeredSlides: false,
        touchRatio: 0,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    });
    let componentSlider = new Swiper(".main-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        preloadImages: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        loopAdditionalSlides: 1,
        centeredSlides: false,
        /* touchRatio: 0, */
        slideToClickedSlide: true,
        thumbs: { swiper: componentThumbs },
        pagination: {
            el: ".component__slider-bullets",
            type: "bullets",
            clickable: true,
            bulletClass: "bullet",
            bulletActiveClass: "active",
        },
        navigation: {
            nextEl: ".component__slider-button.next",
            prevEl: ".component__slider-button.prev",
        },
        keyboard: true,
    });
    /*===== Accordion =====*/
    $(document).on("click", ".faq .faq__wrap .faq__accordion ul li .accordion_title", function (event) {
        $(this).toggleClass("active").next().slideToggle();
    });

    $(document).on("click", ".interview .interview-wrap .interview-video .video-wrap button.play", function () {
        let src = $(this).parent(".video-wrap").data('src');
        $(".interview .interview-wrap .interview-video .video-wrap iframe").remove();
        $(this).closest(".video-wrap").append('<iframe src="' + src + '?autoplay=1&enablejsapi=1&loop=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>');
    });

});

//# sourceMappingURL=maps/common.js.map