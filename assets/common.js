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