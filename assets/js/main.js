(function ($) {
    "use strict";


    // Awards One Hover Img
    const link = document.querySelectorAll(".awards-one__single");
    const linkHoverReveal = document.querySelectorAll(".awards-one__img");
    const linkImages = document.querySelectorAll(".awards-one__img-hover");
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("mousemove", (e) => {
            linkHoverReveal[i].style.opacity = 1;
            linkHoverReveal[i].style.transform = `translate(-250%, -50% ) rotate(5deg)`;
            linkImages[i].style.transform = "scale(1, 1)";
            linkHoverReveal[i].style.left = e.clientX + "px";
        });
        link[i].addEventListener("mouseleave", (e) => {
            linkHoverReveal[i].style.opacity = 0;
            linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
            linkImages[i].style.transform = "scale(0.8, 0.8)";
        });
    }

    /*=============================================
	=    		 Preloader			      =
=============================================*/
    function preloader() {
        $("#preloader").delay(0).fadeOut();
    }

    // swiper slider
    function thmSwiperInit() {
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
    }




    // ===Main Slider Three Carousel ===
    if ($(".main-slider-three__carousel").length > 0) {
        var totalSlides2 = $(".main-slider-three__carousel .swiper-slide").length;
        var gridCarusel = new Swiper(".main-slider-three__carousel", {
            preloadImages: false,
            loop: true,
            freeMode: false,
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            mousewheel: false,
            speed: 1500,
            effect: "slide",
            autoplay: {
                delay: 9000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".main-slider-three__pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".main-slider-three__pagination",
                prevEl: ".main-slider-three__pagination",
            },
            breakpoints: {
                1600: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
            },
        });

        gridCarusel.on("slideChange", function () {
            var csli = gridCarusel.realIndex + 1,
                curnum = $("#current2");
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10,
                    });
                    curnum.html("0" + csli);
                },
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut,
            });
        });

        var totalSlides2 = gridCarusel.slides.length - 6;
        $("#total2").html(totalSlides2);
    }




    // Banner Slider //Home One
    if ($(".thm-swiper__slider-two").length > 0) {
        var bannerSlider = new Swiper(".thm-swiper__slider-two", {
            spaceBetween: 0,
            slidesPerView: 1,
            mousewheel: false,
            height: 500,
            grabCursor: true,
            loop: true,
            effect: "fade",
            speed: 1400,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                prevEl: "#main-slider-two__swiper-button-prev",
                nextEl: "#main-slider-two__swiper-button-next",
            },
        });
        bannerSlider.on("slideChange", function () {
            var csli = bannerSlider.realIndex + 1,
                curnum = $("#current");
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10,
                    });
                    curnum.html("" + csli);
                },
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut,
            });
        });

        var totalSlides = bannerSlider.slides.length - 2;
        $("#total").html("" + totalSlides);
    }

    //Jquery Spinner / Quantity Spinner
    if ($(".quantity-spinner").length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true,
        });
    }

    // ===Checkout Payment===
    if ($(".checkout__payment__title").length) {
        $(".checkout__payment__item").find(".checkout__payment__content").hide();
        $(".checkout__payment__item--active").find(".checkout__payment__content").show();

        $(".checkout__payment__title").on("click", function (e) {
            e.preventDefault();

            $(this)
                .parents(".checkout__payment")
                .find(".checkout__payment__item")
                .removeClass("checkout__payment__item--active");
            $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

            $(this).parent().addClass("checkout__payment__item--active");
            $(this).parent().find(".checkout__payment__content").slideDown();
        });
    }

    /*=============================================
	=    		 Wow Active  	         =
=============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }

    /*=============================================
	=    		Mobile Menu			      =
=============================================*/
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
            '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click", function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(300);
        });
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
            $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });
    }

    /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $(".scroll-to-target").removeClass("open");
        } else {
            $("#sticky-header").addClass("sticky-menu");
            $(".scroll-to-target").addClass("open");
        }
    });

    /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }

    // ===Testimonials Three Carousel=== //
    if ($("#testimonials-one__thumb").length) {
        let testimonialsThumb = new Swiper("#testimonials-one__thumb", {
            slidesPerView: 3,
            spaceBetween: 130,
            speed: 1400,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });

        let testimonialsCarousel = new Swiper("#testimonials-one__carousel", {
            observer: true,
            observeParents: true,
            speed: 1400,
            mousewheel: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            thumbs: {
                swiper: testimonialsThumb,
            },
            pagination: {
                el: "#testimonials-one__pagination",
                type: "bullets",
                clickable: true,
            },

            navigation: {
                nextEl: "#testimonials-three__swiper-button-next",
                prevEl: "#testimonials-three__swiper-button-prev",
            },
        });
    }

    // ===Range Slider Price=== //
    if ($(".range-slider-price").length) {
        var priceRange = document.getElementById("range-slider-price");
        noUiSlider.create(priceRange, {
            start: [50, 500],
            limit: 500,
            behaviour: "drag",
            connect: true,
            range: {
                min: 50,
                max: 500,
            },
        });

        var limitFieldMin = document.getElementById("min-value-rangeslider");
        var limitFieldMax = document.getElementById("max-value-rangeslider");

        priceRange.noUiSlider.on("update", function (values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    }

    /*=============================================
	=    		Accrodion      =
=============================================*/
    if ($(".accrodion-grp").length) {
        var accrodionGrp = $(".accrodion-grp");
        accrodionGrp.each(function () {
            var accrodionName = $(this).data("grp-name");
            var Self = $(this);
            var accordion = Self.find(".accrodion");
            Self.addClass(accrodionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            accordion.each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        if ($(this).parent().hasClass("active") === false) {
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .removeClass("active");
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .find(".accrodion-content")
                                .slideUp();
                            $(this).parent().addClass("active");
                            $(this).parent().find(".accrodion-content").slideDown();
                        }
                    });
            });
        });
    }

    /*=============================================
	=    		Accrodion2      =
=============================================*/
    if ($(".accrodion-grp2").length) {
        var accrodionGrp = $(".accrodion-grp2");
        accrodionGrp.each(function () {
            var accrodionName = $(this).data("grp-name");
            var Self = $(this);
            var accordion = Self.find(".accrodion");
            Self.addClass(accrodionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            accordion.each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        if ($(this).parent().hasClass("active") === false) {
                            $(".accrodion-grp2." + accrodionName)
                                .find(".accrodion")
                                .removeClass("active");
                            $(".accrodion-grp2." + accrodionName)
                                .find(".accrodion")
                                .find(".accrodion-content")
                                .slideUp();
                            $(this).parent().addClass("active");
                            $(this).parent().find(".accrodion-content").slideDown();
                        }
                    });
            });
        });
    }

    // Project Style3
    if ($(".project-three__box li").length) {
        $(".project-three__box li").each(function () {
            let self = $(this);

            self.on("mouseenter", function () {
                console.log($(this));
                $(".project-three__box li").removeClass("active");
                $(this).addClass("active");
            });
        });
    }

    //Tabs Box
    if ($(".tabs-box").length) {
        $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).is(":visible")) {
                return false;
            } else {
                target
                    .parents(".tabs-box")
                    .find(".tab-buttons")
                    .find(".tab-btn")
                    .removeClass("active-btn");
                $(this).addClass("active-btn");
                target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
                target
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
            }
        });
    }

    // Progress Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50,
            }
        );
    }

    //====== Magnific Popup
    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
        });
    }

    /*=============================================
	=    		Img Popup		      =
=============================================*/
    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                },
            });
        });
    }

    /*=============================================
	=    		Odometer Active  	       =
=============================================*/
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*=============================================
	=    		Search Toggler		      =
=============================================*/
    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $(".mobile-nav__wrapper").removeClass("expanded");
            $("body").toggleClass("locked");
        });
    }

    $(window).on("load", function () {
        preloader();
        wowAnimation();
        thmSwiperInit();

        //Jquery Curved Circle
        if ($(".curved-circle").length) {
            $(".curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 76,
                forceHeight: true,
                forceWidth: true,
            });
        }

        //Jquery Curved Circle
        if ($(".curved-circle-2").length) {
            $(".curved-circle-2").circleType({
                position: "absolute",
                dir: 1,
                radius: 71,
                forceHeight: true,
                forceWidth: true,
            });
        }

        //Jquery Curved Circle
        if ($(".curved-circle-3").length) {
            $(".curved-circle-3").circleType({
                position: "absolute",
                dir: 1,
                radius: 76,
                forceHeight: true,
                forceWidth: true,
            });
        }
    });

    $(document).ready(function () {
        $("select:not(.ignore)").niceSelect();
    });





    //==================================
    //========================================
    //===============================================
    const not_active_slide_scale_value = 0.85;
    const not_active_slide_opacity_value = 0.4;

    var swiper = new Swiper("[swiper_scale_active]", {
        slidesPerView: 1.5,
        parallax: true,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                speed: 900 /* Duration of transition between slides (in ms) */ ,
                slidesPerView: 1.2,
            },
            // when window width is >= 640px
            640: {
                speed: 1400,
            },
        },
        keyboard: {
            enabled: true,
        },
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 0,
        grabCursor: true,
        /*
            autoplay: {
              delay: 4000,
            },*/
        // Navigation arrows (not in use)
        navigation: {
            nextEl: "[btn_group] [next2]",
            prevEl: "[btn_group] [prev2]",
        },
        effect: "creative",
        creativeEffect: {
            limitProgress: 2, // slides after 2nd before/after active will have same state
            prev: {
                opacity: not_active_slide_opacity_value,
                scale: not_active_slide_scale_value,
                // will set `translateX(-90%)` on previous slides
                translate: ["-90%", 0, 0],
            },
            next: {
                opacity: not_active_slide_opacity_value,
                scale: not_active_slide_scale_value,
                // will set `translateX(90%)` on next slides
                translate: ["90%", 0, 0],
            },
        },
    });






    /* API event example (Not in use in this code) */
    swiper.on("slideChange", function () {
        console.log("slide changed");
    });

    swiper.on("keyPress", function (swiper, keyCode) {
        console.log(swiper);
        console.log("keyCode", keyCode);
    });










})(jQuery);