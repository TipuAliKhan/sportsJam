/******************
 * Vinova Themes  Framework for Prestashop 1.7.x
 * @package    Nova - PrestaShop 1.7 Theme For Fashion Templates
 * @version    1.0
 * @author    http://vinovathemes.com/
 * @copyright  Copyright (C) October 2013 vinovathemes.com <@emai:vinovathemes@gmail.com>
 * <info@vinovathemes.com>.All rights reserved.
 * @license   GNU General Public License version 1
 * *****************/
(function($) {
    $.cookie = function(key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);
            if (value === null || value === undefined) {
                options.expires = -1
            }
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days)
            }
            value = String(value);
            return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        }
        options = value || {};
        var decode = options.raw ? function(s) {
            return s
        } : decodeURIComponent;
        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || '')
        }
        return null
    }

})(jQuery);

if ((typeof novtheme) === 'undefined') { novtheme = {}; }
var novtheme_current_width = $(window).innerWidth();
var novtheme_min_width = 768;
var novtheme_min_width_ipad = 992;
var novtheme_responsive_mobile = novtheme_current_width < novtheme_min_width;
var novtheme_responsive_ipad = novtheme_current_width < novtheme_min_width_ipad;

function FullWidthRow() {
    var $elements = $('[data-nov-full-width="true"]');
    if($('body').hasClass('lang-rtl'))
        var rtl = true;
    else
        var rtl = false;
    $.each($elements, function(key, item) {
        var $el = $(this);
        var $el_full = $el.next(".nov_row-full-width");
        if ($el_full.length || ($el_full = $el.parent().next(".nov_row-full-width")), $el_full.length) {
            var el_margin_left = parseInt($el.css("margin-left"), 10),
                el_margin_right = parseInt($el.css("margin-right"), 10),
                offset = 0 - $el_full.offset().left - el_margin_left,
                width = $(window).width();
            if (rtl == true) {
                if ($el.css({
                        "position": "relative",
                        "right": offset + 15 + "px",
                        "box-sizing": "border-box",
                        "-webkit-box-flex": "0",
                        "-webkit-flex": "0 0 " + width + "px",
                        "-ms-flex": "0 0 " + width + "px",
                        "flex": "0 0 " + width + "px",
                        "max-width": width
                    }), !$el.data("nov-stretch-content")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0), $el.css({
                        "padding-right": padding + "px",
                        "padding-left": paddingRight + "px"
                    })
                }
            } else {
                if ($el.css({
                        "position": "relative",
                        "left": offset + 15 + "px",
                        "box-sizing": "border-box",
                        "-webkit-box-flex": "0",
                        "-webkit-flex": "0 0 " + width + "px",
                        "-ms-flex": "0 0 " + width + "px",
                        "flex": "0 0 " + width + "px",
                        "max-width": width
                    }), !$el.data("nov-stretch-content")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })
                }
            }
        }
    })
}
function Nov_Instagram(){
    $(".boxInstagram").each(function (i) {
        if($('body').hasClass('lang-rtl'))
            rtl = true;
        else
            rtl = false;
        var Inslimit = $(this).data("limit"),
        InsaccessToken = $(this).data("accesstoken"),
        InsuserId = $(this).data("userid"),
        autoplay = $(this).data("autoplay"),
        autoplaytimeout = $(this).data("autoplaytimeout"),
        loop = $(this).data("loop"),
        dots = $(this).data("dots"),
        nav = $(this).data("nav"),
        margin = $(this).data("margin"),
        items = $(this).data("items"),
        items_large = $(this).data('items_large') ? $(this).data('items_large') : 3,
        items_tablet = $(this).data('items_tablet') ? $(this).data('items_tablet') : 2,
        items_mobile = $(this).data('items_mobile') ? $(this).data('items_mobile') : 2;

        var feed = new Instafeed({
            target: 'instafeed',
            get: 'user',
            userId: InsuserId,
            accessToken: InsaccessToken,
            limit: Inslimit,
            sortBy: 'least-recent',
            resolution: 'standard_resolution',
            template: '<a class="block-instagram" href="{{link}}" target="_blank"><img class="img-fluid " src="{{image}}" alt="image-instagram"/></a>',
            before: function() {},
            after: function() {
                $('.boxInstagram').owlCarousel({
                    navText: [ '<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>' ],
                    loop: loop,
                    margin: margin,
                    autoplay: autoplay,
                    dots: dots,
                    nav:nav,
                    rtl   : rtl,
                    items: items,
                    responsive: {
                        0 : {
                            items: 1,
                            margin : margin,
                        },
                        320 : {
                            items: items_mobile,
                            margin : margin,
                        },
                        768 : {
                            items: items_tablet,
                            margin : margin,
                        },
                        992 : {
                            items: items_large,
                            margin : margin,
                        },
                        1200 : {
                            items: items,
                            margin : margin,
                        }
                    }
                });
                $('.boxInstagram').addClass('owl-carousel');
            },
            success: function() {},
            error: function() {}
        });
        feed.run();

    });

    $(".boxInstagram-grid").each(function (i) {
        if($('body').hasClass('lang-rtl'))
            rtl = true;
        else
            rtl = false;
        var Inslimit = $(this).data("limit"),
        InsaccessToken = $(this).data("accesstoken"),
        InsuserId = $(this).data("userid"),
        margin = $(this).data("margin"),
        items = $(this).data("items"),
        items_mobile = $(this).data("items_mobile");
        var feed = new Instafeed({
            target: 'instafeed',
            get: 'user',
            userId: InsuserId,
            accessToken: InsaccessToken,
            limit: Inslimit,
            sortBy: 'least-recent',
            resolution: 'standard_resolution',
            template: '<div class="col-sm-4 col-xs-6"><a class="block-instagram" href="{{link}}" target="_blank"><img class="img-fluid" src="{{image}}" alt="image-instagram"/></a></div>',
            before: function() {},
            after: function() {},
            success: function() {},
            error: function() {}
        });
        feed.run();
    });
}
//Owl-carousel 2
function Nov_Owlcarousel(){
    $(".owl-carousel").each(function (index) {
    	if($('body').hasClass('lang-rtl'))
    	    rtl = true;
    	else
    	    rtl = false;
    	var autoplay = $(this).data('autoplay');
    	var autoplayTimeout = $(this).data('autoplayTimeout');
    	var items = $(this).data('items') ? $(this).data('items') : 1;
        var margin = $(this).data('margin');
        var nav = $(this).data('nav');
        var dots = $(this).data('dots');
        var loop = $(this).data('loop') ? $(this).data('loop') : false;
        var items_large = $(this).data('items_large') ? $(this).data('items_large') : 2;
        var items_tablet = $(this).data('items_tablet') ? $(this).data('items_tablet') : 2;
        var items_mobile = $(this).data('items_mobile') ? $(this).data('items_mobile') : 1;
        var center = $(this).data('center') ? $(this).data('center') : false;
        var start = $(this).data('start') ? $(this).data('start') : 0;
    	$(this).owlCarousel({
            navText: ['<span>Next</span><i class="fa fa-angle-right" aria-hidden="true"></i>','<i class="fa fa-angle-left" aria-hidden="true"></i><span>Prev</span>'],
            lazyLoad         : true,
            lazyContent      : true,
            loop             : loop,
    		autoplay         : autoplay,
    		autoplayTimeout  : autoplayTimeout,
    		items            : items,
            margin           : margin,
    		rtl              : rtl,
            dots             : dots,
            nav              : nav,
            responsive       : {
                0 : {
                    items: 1,
                    center: false,
                    margin : 0,
                    loop: false,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
                320 : {
                    items: 1,
                    center: false,
                    margin : 0,
                    loop: loop,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
                576 : {
                    items: items_mobile,
                    center: false,
                    margin : margin,
                    loop: loop,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
                768 : {
                    items: items_tablet,
                    center: false,
                    margin : margin,
                    loop: loop,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
                992 : {
                    items: items_large,
                    center: false,
                    margin : margin,
                    loop : loop,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
                1200 : {
                    items: items,
                    center: center,
                    startPosition: start,
                    margin : margin,
                    loop : loop,
                    autoplay         : autoplay,
                    autoplayTimeout  : autoplayTimeout,
                },
            }
    	});
        checkClasses(this);
        $(this).on('translated.owl.carousel', function(event) {
            checkClasses(this);
        });
    });
}

function checkClasses(class_parent){ 
    if($('body').hasClass('lang-rtl'))
        rtl = true;
    else
        rtl = false;
    var total = $('.owl-stage .owl-item.active',class_parent).length;
    $('.owl-stage .owl-item',class_parent).removeClass('firstActiveItem lastActiveItem');

    $('.owl-stage .owl-item.active',class_parent).each(function(index){
        if (index === 0 && rtl=== false) {
            // this is the first one
            $(this).addClass('firstActiveItem');
        }else if (index === 0 && rtl=== true){
            $(this).addClass('lastActiveItem');
        }
        if (index === total - 1 && total>1 && rtl=== false) {
            // this is the last one
            $(this).addClass('lastActiveItem');
        }else if (index === total - 1 && total>1 && rtl=== true){
            $(this).addClass('firstActiveItem');
        }
    });
}

//Owl with Slick
function Thumnail_Product() {
    $(".js-qv-mask .slick-images").each(function (index) {
        if($('body').hasClass('lang-rtl'))
            rtl = true;
        else
            rtl = false;
        var autoplay = $(this).data('autoplay');
        var autoplayTimeout = $(this).data('autoplayTimeout');
        var items = $(this).data('items');
        var items_mobile = $(this).data('items_mobile');
        var margin = $(this).data('margin');
        var nav = $(this).data('nav');
        var dots = $(this).data('dots');
        var loop = $(this).data('loop');
        var vertical = $(this).data('vertical');
        var position = $(this).find('.selected').data('position-image');
        $(this).slick({
            rtl: rtl,
            vertical: vertical,
            //initialSlide: position,
            slidesToShow: items,
            slidesToScroll: 1,
            arrows: nav,
            dots: dots,
            responsive: [

                {
                  breakpoint: 1024,
                  settings: {
                    dots: dots,
                    vertical: false,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    vertical: false,
                    arrows: false,
                    dots: false,
                    slidesToShow: items_mobile,
                    slidesToScroll: 1,
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    })
}


//Image With Slick
function Slick_Image_Slider(){
    $('.slick-images-slider').each(function (index) {
        if($('body').hasClass('lang-rtl'))
            rtl = true;
        else
            rtl = false;
        var autoplay = $(this).data('autoplay');
        var autoplayTimeout = $(this).data('autoplayTimeout');
        var items = $(this).data('items');
        var items_mobile = $(this).data('items_mobile');
        var margin = $(this).data('margin');
        var nav = $(this).data('nav');
        var dots = $(this).data('dots');
        var loop = $(this).data('loop');
        $(this).slick({
            rtl: rtl,
            nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
            slidesToShow: items,
            slidesToScroll: 1,
            dots: dots,
            initialSlide: 1,
        });
    })
}

//RTL Slick
function rtl_slick(){
    if($('body').hasClass('lang-rtl')) {
     return true;
 } else {
     return false;
 }
}
//Slick Slider Syncing
function slick_syncing(){
    $('.slider-image-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: rtl_slick(),
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        fadeSpeed: 1000,
        asNavFor: '.slider-image-nav'
    });
    $('.slider-image-nav').slick({
        nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: rtl_slick(),
        asNavFor: '.slider-image-for',
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        fadeSpeed: 1000,
        centerMode: false,
        focusOnSelect: true,

    }); 
}

//countdown product with Slick
function slick_countdown(){
    $('.countdown-productlist').slick({
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        rtl: rtl_slick(),
        autoplaySpeed: 4000,
        dots: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.countdown-productlist-thumnail'
    });
    $('.countdown-productlist-thumnail').slick({
        initialSlide: 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        rtl: rtl_slick(),
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        asNavFor: '.countdown-productlist'
    });
}
var current_width = $(window).width();
var min_width = 768;
var responsive_mobile = current_width < min_width;

function swapChildrenNova(obj1, obj2) {
    var temp = obj2.children().detach();
    obj2.append(obj1.children());
    //obj1.append(temp);
}
function NovatoggleMobileStylesCart() {
    if (responsive_mobile) {
        $("#_mobile_cart").each(function(idx, el) {
            var target = $('#_mobile_cart_bottom');
            if (target) {
                target.append($('#_mobile_cart').html());
            }
        });
    } else {
        $("#_mobile_cart_bottom").each(function(idx, el) {
            var target = $('#_mobile_cart');
            if (target) {
                $("#_mobile_cart_bottom").children().detach();
            }
        });
    }
}
$(window).on('resize', function() {
    var _cw = current_width;
    var _mw = min_width;
    var _w = $(window).width();
    var _toggle = (_cw >= _mw && _w < _mw) || (_cw < _mw && _w >= _mw);
    responsive_mobile = _cw >= _mw;
    current_width = _w;
    if (_toggle) {
        NovatoggleMobileStylesCart();
    }
});


//Toggle menu left
function resetCanvas(){
    $('body').removeClass('open_nov_mobile_menu');
    $('.canvas-menu').removeClass('canvas-active');
    $('.nov-menu .toggle-nav').removeClass('act');
    $('.canvas-overlay').removeClass('act');
    return false;
};
var l = $('.canvas-menu'),
    c = $('.nov-menu .toggle-nav'),
    u = $('.canvas-overlay');

c.click(function() {
    l.hasClass('canvas-active') ? ( l.removeClass('canvas-active'), u.removeClass('act'), c.removeClass('act') ) : ( l.addClass('canvas-active'), u.addClass('act'), c.addClass('act') );
});

//Megamenu
if($("body").attr("id")=="index")
	this_hompage = 1;
else
	this_hompage = 0;

var showpanel = false;
var hidepanel = false;

var this_url = window.location;
this_url = String(this_url);
this_url = this_url.replace("https://","").replace("http://","").replace("www.","").replace( /#\w*/, "" );

var this_link = "{/literal}{$current_link}{literal}";
this_link = this_link.replace("https://","").replace("http://","").replace("www.","").replace( /#\w*/, "" );


//Canvas Mainmenu
$('#_mobile_mainmenu').click(function() {
    $('body').hasClass('open_nov_mobile_menu') ? ( $('body').removeClass('open_nov_mobile_menu') ) : ( $('body').addClass('open_nov_mobile_menu') );
});

$(".nov-megamenu > ul > li > a").each(function() {
    url_menu = $(this).attr("href").replace("https://","").replace("http://","").replace("www.","").replace( /#\w*/, "" );
	if( (this_url == url_menu) || (this_url.replace(this_link,"") == url_menu) || this_hompage){
		$(this).parent().addClass("active");
        return false;
	}
});
$(".category-sub-menu > li > a").each(function() {
    url_menu = $(this).attr("href").replace("https://","").replace("http://","").replace("www.","").replace( /#\w*/, "" );
    if( (this_url == url_menu) || (this_url.replace(this_link,"") == url_menu) || this_hompage){
        $(this).parent().addClass("active");
        return false;
    }
});


// Canvas Menu-Left
function Canvas_Menu(){
    $('.open-canvas-menu').on('click', function(e){
        $('body').find('.canvas-menu').toggleClass('active');
        $(this).hasClass('active') ? ( $(this).removeClass('active') ) : ( $(this).addClass('active') );
        e.stopPropagation();
    });
}

function NovTogglePage() {
    $('.nov-toggle-page').on('click', function(e){
        var target = $(this).data('target');
        $('body').hasClass('show-boxpage') ? ( $('body').removeClass('show-boxpage') ) : ( $('body').addClass('show-boxpage') );
        $(target).hasClass('active') ? ( $(target).removeClass('active') ) : ( $(target).addClass('active') );
        e.stopPropagation();
    });
    $('.box-header .close-box').on('click', function(e) {
        $('body').removeClass('show-boxpage');
        $(this).parents('.mobile-boxpage').removeClass('active');
        $('#mobile-pageaccount').find('.box-content').removeClass('active');
        e.stopPropagation();
    });
    $('.links-currency, .links-language').on('click', function(e) {
        var target_link = $(this).data('target'),
            title_box = $(this).data('titlebox');

        $('#mobile-pageaccount').find('.box-content').removeClass('active');
        $('.title-box','#mobile-pageaccount').html(title_box);
        $('.back-box','#mobile-pageaccount').addClass('active');
        $(target_link).hasClass('active') ? ( $(target_link).removeClass('active') ) : ( $(target_link).addClass('active') );
        e.stopPropagation();
    });
    $('.back-box','#mobile-pageaccount').on('click', function(e) {
        var titlebox_parent = $('#mobile-pageaccount').data('titlebox-parent');
        $('#mobile-pageaccount').find('.box-content').removeClass('active');
        $('.title-box','#mobile-pageaccount').html(titlebox_parent);
        $(this).removeClass('active');
    })
}

function NovHeightBoxContent() {
    var height = $( window ).outerHeight(),
        boxheight = $('.box-header').outerHeight(),
        menubottom = $('#stickymenu_bottom_mobile').outerHeight();
    $('.box-content','.mobile-boxpage').each(function(){
        $(this).outerHeight(height - boxheight - menubottom);
    });
}

//Vertical menu
function NovVerticalToggle() {
    $('.verticalmenu-main .toggle-nav').on('click', function(e) {
        if($(window).width() > 991){
            if($('.verticalmenu-content').hasClass('show') ){
                ($('.verticalmenu-content').removeClass('show'));
                $('.verticalmenu-content').find('.verticalmenu .menu').slideUp(800);
            } else {
                $('.verticalmenu-content').hasClass('active') ? ( $('.verticalmenu-content').removeClass('active')) : ( $('.verticalmenu-content').addClass('active'));

            }
            if($('.verticalmenu-content').hasClass('show')){
                $('.verticalmenu-content').find('.verticalmenu .menu').slideDown(800);
            } else{
                $('.verticalmenu-content').find('.verticalmenu .menu').slideUp(800);    
            }
            if($('.verticalmenu-content').hasClass('active')){
                $('.verticalmenu-content').find('.verticalmenu .menu').slideDown(800);
            } else{
                $('.verticalmenu-content').find('.verticalmenu .menu').slideUp(800);
            }
    }else{
         if($('.verticalmenu-content').hasClass('show') ){
                ($('.verticalmenu-content').removeClass('show'));
            } else {
                $('.verticalmenu-content').hasClass('active') ? ( $('.verticalmenu-content').removeClass('active')) : ( $('.verticalmenu-content').addClass('active'));
            }
    }
        e.stopPropagation();
    });
    $('.verticalmenu-main .title_block').on('click', function(e) {
        $('.nov-verticalmenu-content').hasClass('active') ? ( $('.verticalmenu-content').removeClass('active')) : ( $('.verticalmenu-content').addClass('active'));
        $('.nov-verticalmenu-content').find('.verticalmenu .menu').slideToggle();
        e.stopPropagation();
    });
    if($(window).width() < 992) {
        $(document).on('click', function(vl) {
            if ($(vl.target).is('.verticalmenu-content') == false ) {
                $('.verticalmenu-content').removeClass('active');
                $('body').removeClass('open_nov_vertical_menu');
            }
        });
        $('.verticalmenu-content').each(function(){
            if($('.verticalmenu-content').hasClass('show') ){
              ($('.verticalmenu-content').removeClass('show'));  
            }
        });
    }
    
}
//Vertical menu on mobile
function NovVerticalToggleMobile() {
    // $(document).on('click', function(vl) {
    //     if ($(vl.target).is('.verticalmenu-content')==true) {
    //         $('.verticalmenu-content').removeClass('active');
    //     }
    // });
}

function SetPositionTopSubmenu() {
    if($(window).width() > 1199) {
        var i = 0;
        $('.menu > .item','#verticalmenu').each(function(){
            i = i + 1;
            if($(this).hasClass('group')) {
                if (i != 2){
                    var position = -(30*(i-1) + 10);
                }else{
                  var position = -(40*(i-1));
                }
                
                $(this).find('.dropdown-menu').css('top',position);
            }
        });
    }else if( $(window).width() > 991 || $(window).width() < 1200){
        var i = 0;
        $('.menu > .item','#verticalmenu').each(function(){
            i = i + 1;
            if($(this).hasClass('group')) {
                    var position = -(30*(i-1) + 10);
                $(this).find('.dropdown-menu').css('top',position);
            }
        });
    }
}

function NovHeightVertical() {
    if($(window).width() > 980) {
        var h = $('#nivoSlider').innerHeight();
        $('#_desktop_verticalmenu','.displayhomenovone').innerHeight(h);
    }
}

//_mobile_infos
function NovMobileToggle() {
    if($(document).width() < 1600){
        $('#_mobile_infos .nav-info').on('click', function(e) {
            $('#_mobile_infos').hasClass('active') ? ( $('#_mobile_infos').removeClass('active'), $(this).removeClass('act') ) : ( $('#_mobile_infos').addClass('active'), $(this).addClass('act') );
            e.stopPropagation();
        });
        $(document).on('click', function(vl) {
            if ($(vl.target).is('#_mobile_infos')==false) {
                $('#_mobile_infos').removeClass('active');
            }
        });
    }
}

//When hover Cat in desktop
$('#_desktop_cart').hover(function() {
    $('.cart_block').addClass('hover-active');
}, function() {
    $('.cart_block').removeClass('hover-active');
});

function nov_close(){
    $('.cart_block .nov_close_cart').on('click', function(e) {
        $(".cart_block").removeClass("hover-active");
        $(this).addClass('active');
        e.stopPropagation();
    });
}
function nov_button_close(){
    $('.header-top-content .button-top-close').on('click', function(e) {
        $('.header-top-content').slideToggle(500);        
        e.stopPropagation();
    });
}

function NovSearchToggle() {
    $('#search_widget .toggle-search').on("click", function(e) {
        $(this).parent("#search_widget").addClass("active-search");
        $('.header-menu-search').addClass("active-content-search");
        e.stopPropagation();
    });
    $(document).on('click', function(event) {
        if ( $(event.target).is('.form-search input') == false ) {
            $('#search_widget').removeClass("active-search");
        }
    });
    $('#_mobile_search .nav-search').on("click", function(f) {
        $(this).parent("#_mobile_search").addClass("active-search");
        f.stopPropagation();
    });
    $(document).on('click', function(event) {
        if ( $(event.target).is('#searchbox input') == false ) {
            $('#_mobile_search').removeClass("active-search");
        }
    });
}

function NovToggleSearch() {
    $('.js-btn-search').on('click', function(e){
        var target = $(this).data('target');
        $('body').hasClass('show-boxpage') ? ( $('body').removeClass('show-boxpage') ) : ( $('body').addClass('show-boxpage') );
        $('#nov-searchBox').hasClass('active') ? ( $('#nov-searchBox').removeClass('active')  ) : ( $('#nov-searchBox').addClass('active'), $('#nov-searchBox').find('input[type="text"]').focus() );
        e.stopPropagation();
    });
    $('.nov-seachBoxClose').on('click', function(e) {
        $('body').removeClass('show-boxpage');
        $('#nov-searchBox').removeClass('active');
        e.stopPropagation();
    });
}

function NovToggleAction() {
    $(document).on('click', '.nov-toggle-btn', function(e) {
        var toggle = $(this).data('toggle');
        $(this).toggleClass('act');
        $(this).parent().toggleClass('active');
        $('.canvas-overlay').addClass('act');
        e.stopPropagation();
    });
}
function Nov_advancesearch(){
    $('#_desktop_search_content .icon-advansearch').on('click', function(e){
        $(".block_advancedsearch").hasClass('ad_active') ? $(".block_advancedsearch").removeClass('ad_active') : $(".block_advancedsearch").addClass('ad_active');
        $('.canvas-overlay').hasClass('act') ? $(".canvas-overlay").removeClass('act') : $(".canvas-overlay").addClass('act');
        e.stopPropagation();
    });
    $(document).on('click', function(f) {
            if($(f.target).is('#searchbox input') == false) {
                $('.block_advancedsearch').removeClass('ad_active');
                $('.canvas-overlay').removeClass('act');
            }
    });
}

function LoadingSite() {
    $('#main-site').css('display','none');
    $('#page-preloader').delay(1000).fadeOut();
    $('#main-site').css('display','block');
}

if ($(document).width() < 768) {
    megamenu_rep();
}
$(window).resize(function() {
    if($(window).width() < 768) {
       megamenu_rep();
    }
});

function megamenu_rep() {
    $("#megamenu .menu li").each(function() {
        if($(this).hasClass("has-sub") || $(this).hasClass("group")) {
            if ($(this).children("a").length > 0 || $(this).children(".menu-title").length > 0) {
                if($(this).children(".nov-menu-toggle").length == 0) {
                    $(this).children(".dropdown-menu").css("display","none");
                }
            }
            else {
                $(this).children(".dropdown-menu").css("display","block");
            }
        }
    });
}


function ScrollFacet() {
    $('.facet').each(function (i) {
        if( $(this).find('li').length > 5 ) {
            $(this).addClass('facet-hasscroll');
        }
    })
}

//FlipBack Menu
function FlipBackMenu() {
    var width_window = $(window).width();
    $('#megamenu .level1 > li').each(function(){
        var total_width_sub = $('#megamenu .level1 > li > .dropdown-menu').outerWidth();
        var position = $(this).offset().left;
        var check = width_window - position;
        if (total_width_sub > check) {
            $(this).addClass('flipback');
        }
    });
}

// Stick Header
function sticky_header(){
    if($('#header').find($('div')).hasClass('group-sticky')){
        $(window).scroll(function(){    
            var header_height = $("#header").height();
            var ht = header_height;
            var hts = header_height + 150;
            var st = $(window).scrollTop();
            if(st > ht){
                $('body').addClass('sticky-header');
                $('div.group-sticky').addClass('fixed-sticky-box');
                if(st > hts){
                    $('div.group-sticky').addClass('active');
                }else{
                    $('div.group-sticky').removeClass('active');
                }
            }
            else{
               $('body').removeClass('sticky-header');
               $('div.group-sticky').removeClass('fixed-sticky-box');
            }
        });
    }
}
//Vertical-Canvas
function NovVertical_Canvas(){
    if($(window).width() < 992){
        $('.verticalmenu-main .toggle-nav').click(function() {
            $('body').hasClass('open_nov_vertical_menu') ? ( $('body').removeClass('open_nov_vertical_menu') ) : ( $('body').addClass('open_nov_vertical_menu') );     
        });
    }
}
//MoreverticalMenu
function _moreverticalMenu(){
    
    if($(window).width() > 991){
        var count_showmore = $('.nov-verticalmenu').data('count_showmore'),
            desktop_item = $('.nov-verticalmenu').data('desktop_item');
        var windowsize = $(window).width();
        $('ul.menu').each(function(){
            var LiN = $(this).find('>li').length;
            if( LiN > count_showmore){
                    if(windowsize > 1199 && windowsize < 1549  ){
                        var hide_count =  count_showmore - 5; 
                    }else if( windowsize > 1550){
                        var hide_count =  count_showmore - 1;
                    }
                    else{
                       var hide_count =  desktop_item;
                    }
                $('>li', this).eq(hide_count).nextAll().hide(100).addClass('toggleable');
                $(this).append('<li class="more item"></li>'); 
            }
        });
        $('ul.menu').on('click','.more', function(){
          if( $(this).hasClass('less') ){    
            $(this).removeClass('less');    
          }else{
            $(this).addClass('less'); 
          }
          $(this).siblings('li.toggleable').slideToggle();
        });
    }
}

function Stick_Element() {
    //Code here
}

//Sticky Sidebar
function sticky_sidebar(){
    if($(window).width() > 991){
        $('.content_filter_special .row').stick_in_parent({
            parent: '.content_filter',
            offset_top: 86
        });
    }
}


//Go to top
function goToTop() {
    var timer;
    $(window).scroll(function() {
        if ( timer ) clearTimeout(timer)
        timer = setTimeout(function(){
            if ($(window).scrollTop() >= 200) {
                $('#_desktop_back_top').fadeIn();
            } else {
                $('_desktop_back_top').fadeOut();
            }
        }, 300);

    });
    $("#back-top").click(function(){
        $("body,html").animate({scrollTop:0 },"normal");
        return!1
    });
}

//Popup newsletter
function PopupNewletter() {
    var date = new Date();
    var minutes = 60;
    date.setTime(date.getTime() + (minutes * 60 * 1000));

    if ($.cookie('popupNewLetterStatus') != 'closed' && $('body').outerWidth() > 768) {
        $("#popup-subscribe").modal({
            show: !0
        });
    }
    $.cookie("popupNewLetterStatus", "closed", {
        'expires': date,
        'path': '/'
    })
    $('input.no-view').change(function() {
        if ($('input.no-view').prop("checked") == 1) {
            $.cookie("popupNewLetterStatus", "closed", {
                'expires': date,
                'path': '/'
            })
        } else {
            $.cookie("popupNewLetterStatus", "", {
                'expires': date,
                'path': '/'
            })
        }
    })
}
if ($("#popup-subscribe").length) {
    $(window).load(function(){
        var timer = window.setTimeout(PopupNewletter,8000);
    });
}

novtheme.SliderShow = function() {
    if($("#nov-slider").length) {
        var effect = $('#nov-slider').data('effect');
        var slices = $('#nov-slider').data('slices');
        var animSpeed = $('#nov-slider').data('animspeed');
        var pauseTime = $('#nov-slider').data('pausetime');
        var startSlide = $('#nov-slider').data('startslide');
        var directionNav = $('#nov-slider').data('directionnav');
        var controlNav = $('#nov-slider').data('controlnav');
        var controlNavThumbs = $('#nov-slider').data('controlnavthumbs');
        var pauseOnHover = $('#nov-slider').data('pauseonhover');
        var manualAdvance = $('#nov-slider').data('manualadvance');
        var randomStart = $('#nov-slider').data('randomstart');
        $(window).load(function() {
            $('.nivoSlider','#nov-slider').nivoSlider({
                effect: effect, // Specify sets like: 'fold,fade,sliceDown'
                slices: slices, // For slice animations
                boxCols: 12, // For box animations
                boxRows: 6, // For box animations
                animSpeed: animSpeed, // Slide transition speed
                pauseTime:  pauseTime, // How long each slide will show
                startSlide:  startSlide, // Set starting Slide (0 index)
                directionNav: directionNav, // Next & Prev navigation
                controlNav: controlNav, // 1,2,3... navigation
                controlNavThumbs: controlNavThumbs, // Use thumbnails for Control Nav
                pauseOnHover: pauseOnHover, // Stop animation while hovering
                manualAdvance: manualAdvance, // Force manual transitions
                prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', // Prev directionNav text
                nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', // Next directionNav text
                randomStart: randomStart, // Start on a random slide
                beforeChange: function(){

                }, // Triggers before a slide transition
                afterChange: function(){

                }, // Triggers after a slide transition
                slideshowEnd: function(){

                }, // Triggers after all slides have been shown
                lastSlide: function(){

                }, // Triggers when last slide is shown
                afterLoad: function(){
                    $(".nov_preload").hide();
                } // Triggers when slider has loaded
            });
        });
    }
}

//Google map lock
$(".map-locker").click(function() {
    $(this).css('display','none');
});
$("#nov-map-contact").on( "mouseleave", function() {
    $(".map-locker").css('display','block');
});

//Change Display Type category

$(document).on('click', '.change-type .grid-type', function(e) {
    e.preventDefault();
    $('#categories-product .products').removeClass('list').addClass('grid');
    $('.change-type').find('.grid-type').addClass('active');
    $('.change-type').find('.list-type').removeClass('active');
    $('#categories-product .products .product-miniature').each(function(index, element) {
        $(element).removeClass('row d-flex align-items-start');
        $('.thumbnail-container', element).removeClass('col-md-5');
        $('.product-groups', element).removeClass('col-md-7');
    });
    $.cookie('nov_grid_list', 'grid', {
        expires: 1,
        path: '/'
    })
});

$(document).on('click', '.change-type .list-type', function(e) {
    e.preventDefault();
    $('#categories-product .products').removeClass('grid').addClass('list');
    $('.change-type').find('.grid-type').removeClass('active');
    $('.change-type').find('.list-type').addClass('active');
    $('#categories-product .products .product-miniature').each(function(index, element) {
        $(element).addClass('row d-flex align-items-start');    
        $('.thumbnail-container', element).addClass('col-md-5');
        $('.product-groups', element).addClass('col-md-7');
    });
    $.cookie('nov_grid_list', 'list', {
        expires: 1,
        path: '/'
    })
});

//Social Login
function SocialPopup(url) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (600 / 2)) + dualScreenLeft;
    var top = ((height / 2) - (600 / 2)) + dualScreenTop;
    var newWindow = window.open(url, '_blank', 'scrollbars=yes,top=' + top + ',left=' + left + ',width=500,height=500');
    if (window.focus) {
        newWindow.focus();
    }
}

$(window).on('resize', function() {
    FullWidthRow();
    SetPositionTopSubmenu();
    NovMobileToggle();
    NovTogglePage();
    NovHeightBoxContent();
    NovSearchToggle();
    NovToggleSearch();
    FlipBackMenu();
        //LoadingSite();
});

$(document).ready( function() {
    var d = $(this),
        mobile = false;

    sticky_sidebar();
    FullWidthRow();
    //enable tooltip everywhere
    $('[data-toggle="tooltip"]').tooltip();

    // SliderShow
    novtheme.SliderShow();
    //display view type
    nov_close();
    nov_button_close();
    NovTogglePage();
    NovSearchToggle();
    NovToggleSearch();
    Nov_advancesearch();
    slick_syncing();
    slick_countdown();
    Canvas_Menu();
    SetPositionTopSubmenu();
    NovatoggleMobileStylesCart();
    NovVerticalToggle();
    //NovMyaccountToggle();
    NovToggleAction();
    Nov_Instagram();
    NovVerticalToggleMobile();
    ScrollFacet();
    Slick_Image_Slider();
    Thumnail_Product();
    Nov_Owlcarousel();
    goToTop();

    $('.category-sub-menu li').each(function (index) {
        if ($(this).hasClass('active')) {
            $('.collapse',$(this)).collapse("show");
            $(this).parent().collapse("show");
            $(this).parent().parent().collapse("show");
        }

    })

	$("#nov-verticalmenu li").first().children('.dropdown-menu').slideDown(300);
	$("#nov-verticalmenu li").first().children('.block_content').slideDown(300);
	$("#nov-verticalmenu li").first().addClass('menu-active');

    $(".show-sub").click( function() {
        var $this = $(this);
        if ($this.parent().hasClass('menu-active')) {
            $this.parent().removeClass('menu-active');
            $this.next().slideUp(300);
        } else {
            $this.parent().parent().find('li').removeClass('menu-active');
            $this.parent().parent().find('li .dropdown-menu, li .block_content').slideUp(300);
            $this.parent().toggleClass('menu-active');
            $this.next().slideToggle(300);
        }
        return false;
    });

    $('.opener').click( function(){
        if($(this).parent('li').hasClass('menu-active')){
            $(this).parent('li').children('.dropdown-menu').slideUp(300);
            $(this).parent('li').removeClass('menu-active');
        }
        else {
            $(this).parent('li').children('.dropdown-menu').slideDown(300);
            $(this).parent('li').addClass('menu-active');
        }
    });

    $('.countdownfree').each(function(e){
        var time_count = $(this).data('date');
        $(this).countdown(time_count, function(event) {
          var $this = $(this).html(event.strftime(''
            + '<div class="item-time day"><span class="data-time time-date">%D</span><span class="name-time">day</span></div>'
            + '<div class="item-time hours"><span class="data-time time-hours">%H</span><span class="name-time">hour</span></div>'
            + '<div class="item-time minute"><span class="data-time time-minute">%M</span><span class="name-time">min</span></div>'
            + '<div class="item-time second"><span class="data-time time-second">%S</span><span class="name-time">sec</span></div>'
            ));
        });
    });
    $(window).on("load resize", function(e) {
        NovVertical_Canvas();
        if (d.width() > 991) {
             sticky_header();
        }
    });
    $(window).on("load", function(e) {
        _moreverticalMenu();
    });
    
});


