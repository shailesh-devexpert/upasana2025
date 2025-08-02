 $(".show-more").click(function() {
         $(".text").hasClass("show-more-height") ? $(this).text("(Show Less)") : $(this).text("(Show More)"),
             $(".text").toggleClass("show-more-height")
     }),
     $(".team-slider").slick({
         infinite: !0,
         slidesToShow: 3,
         arrows: !1,
         autoplay: !0,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".accommodation-slider").slick({
         infinite: !0,
         slidesToShow: 4,
         arrows: !1,
         autoplay: !0,
         slidesToScroll: 1
     }),
     $(".testimonial-slider").slick({
         infinite: !0,
         slidesToShow: 3,
         autoplay: !0,
         arrows: !1,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(window).scroll(function() {
         $(window).scrollTop() >= 3 ? $(".navigation").addClass("fixed-nav") : $(".navigation").removeClass("fixed-nav")
     }),
     $(document).ready(function() {
         $("#v-pills-profile-taba").click(function() {
                 $("#overview .tab-pane.fade").removeClass("active show"),
                     $("#v-pills-profilea").addClass("active show")
             }),
             $("#v-pills-settings-taba").click(function() {
                 $("#overview .tab-pane.fade").removeClass("active show"),
                     $("#v-pills-settingsa").addClass("active show")
             })
     }),
     $(document).on("click", "#overview .nav-link", function() {
         $("body, html").animate({
             scrollTop: $("#overview").offset().top
         }, 500)
     }),
     $(document).ready(function() {
         $("#overview .nav-pills .nav-link").click(function() {
                 $("#overview .nav-pills .nav-link").removeClass("myactive"),
                     $(this).addClass("myactive")
             }),
             $("#v-pills-messages-tab").click(function() {
                 $("#overview .tab-pane.fade").removeClass("active show"),
                     $("#v-pills-messages").addClass("active show")
             }),
             $("#v-pills-profile-tab1").click(function() {
                 $("#overview .tab-pane.fade").removeClass("active show"),
                     $("#v-pills-profile1").addClass("active show")
             })
     }),
     $(document).ready(function() {
         $(".more").each(function() {
                 var e = $(this).html();
                 if (e.length > 95) {
                     var s = e.substr(0, 95) + '<span class="moreellipses">&nbsp;</span><span class="morecontent"><span>' + e.substr(95, e.length - 95) + '</span>&nbsp;&nbsp;<a href="" class="morelink">Read More</a></span>';
                     $(this).html(s)
                 }
             }),
             $(".morelink").click(function() {
                 return $(this).hasClass("less") ? ($(this).removeClass("less"),
                         $(this).html("Read More")) : ($(this).addClass("less"),
                         $(this).html("Read Less")),
                     $(this).parent().prev().toggle(),
                     $(this).prev().toggle(), !1
             })
     }),
     481 > $(window).width() && $("#schedule.table").addClass("table-responsive"),


     $(".online-review-byr").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: !0,
         arrows: !1,
         fade: !0,
         cssEase: "linear",
         autoplaySpeed: 2e3
     }),
     $(document).ready(function() {
         $("#home-faqs .accordion a").click(function() {
             $(this).toggleClass("active"),
                 $(this).next(".content").slideToggle(400)
         })
     }),
     $(document).ready(function() {
         $("#mobile-syllabus .accordion a").click(function() {
             $(this).toggleClass("active"),
                 $(this).next(".content").slideToggle(400)
         })
     }),
     $(".book-slider").slick({
         dots: !0,
         infinite: !0,
         speed: 300,
         autoplay: !0,
         arrows: !1,
         autoplaySpeed: 2e3,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".accomo-food-slider,.online-yttc-slider").slick({
         dots: !0,
         infinite: !0,
         speed: 300,
         slidesToShow: 3,
         autoplay: !0,
         autoplaySpeed: 2e3,
         slidesToScroll: 3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".excursion-slider").slick({
         dots: !0,
         infinite: !0,
         autoplay: !0,
         autoplaySpeed: 2e3,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".trust-slider").slick({
         dots: !0,
         infinite: !0,
         autoplay: !0,
         autoplaySpeed: 2e3,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     641 > $(window).width() && $(".offer-wrap,.pop-more-course").slick({
         dots: !0,
         infinite: !0,
         speed: 300,
         autoplay: !0,
         autoplaySpeed: 2e3,
         slidesToShow: 1,
         arrows: !1,
         slidesToScroll: 1
     }),
     $(document).ready(function() {
         $(".notification-close").click(function() {
             $(".notification").slideUp("slow")
         })
     }),
     $(".new-testimonial-video-slider").slick({
         dots: !0,
         infinite: !0,
         speed: 300,
         slidesToShow: 3,
         autoplay: !0,
         autoplaySpeed: 2e3,
         slidesToScroll: 4,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     });
 var showChartr = 100,
     ellipsestexttr = "",
     moretexttr = "Read More",
     lesstexttr = "Read Less";
 $(".trust-slider .descriptions").each(function() {
         var e = $(this).html();
         if (e.length > showChartr) {
             var s = e.substr(0, showChartr),
                 o = e.substr(showChartr, e.length - showChartr);
             $(this).html(s + '<span class="moreellipsestr">' + ellipsestexttr + '...</span><span class="morecontenttr"><span>' + o + '</span>&nbsp;&nbsp;<a href="" class="morelinktr">' + moretexttr + "</a></span>")
         }
     }),
     $(".morelinktr").click(function() {
         return $(this).hasClass("lesstr") ? ($(this).removeClass("lesstr"),
                 $(this).html(moretexttr)) : ($(this).addClass("lesstr"),
                 $(this).html(lesstexttr)),
             $(this).parent().prev().toggle(),
             $(this).prev().toggle(), !1
     }),
     jQuery.event.special.touchstart = {
         setup: function(e, s, o) {
             this.addEventListener("touchstart", o, {
                 passive: !s.includes("noPreventDefault")
             })
         }
     },
     jQuery.event.special.touchmove = {
         setup: function(e, s, o) {
             this.addEventListener("touchmove", o, {
                 passive: !s.includes("noPreventDefault")
             })
         }
     },
     jQuery.event.special.wheel = {
         setup: function(e, s, o) {
             this.addEventListener("wheel", o, {
                 passive: !0
             })
         }
     },
     jQuery.event.special.mousewheel = {
         setup: function(e, s, o) {
             this.addEventListener("mousewheel", o, {
                 passive: !0
             })
         }
     },
     $(".testimonial-slider-online").slick({
         arrows: !1,
         dots: !1,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: !0,
         autoplaySpeed: 900,
         responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1
             }
         }, ]
     }),
     $(".testimonial-slider-reverse").slick({
         arrows: !1,
         dots: !1,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: !0,
         autoplaySpeed: 900,
         rtl: !0,
         responsive: [{
             breakpoint: 992,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1
             }
         }, ]
     }),
     $(".legacy-slider").slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".level-one-slider").slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".budle-offer-slider").slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3
     }),
     $(".online-testimonial-design-slider").slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".feedback-online-slider").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     }),
     $(".practice-online-slider").slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: !0,
         dots: !1,
         arrows: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1025,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: !0,
                 dots: !0
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }, ]
     });
 var showCharserw = 220,
     ellipsestextserw = "...",
     moretextserw = "Show more >",
     lesstextserw = "Show less";
 $(".moreat").each(function() {
         var e = $(this).html();
         if (e.length > showCharserw) {
             var s = e.substr(0, showCharserw),
                 o = e.substr(showCharserw, e.length - showCharserw);
             $(this).html(s + '<span class="moreellipsesserw">' + ellipsestextserw + '&nbsp;</span><span class="morecontentserw"><span>' + o + '</span>&nbsp;&nbsp;<a href="" class="morelinkserw ">' + moretextserw + "</a></span>")
         }
     }),
     $(".morelinkserw").click(function() {
         return $(this).hasClass("less") ? ($(this).removeClass("less"),
                 $(this).html(moretextserw)) : ($(this).addClass("less"),
                 $(this).html(lesstextserw)),
             $(this).parent().prev().toggle(),
             $(this).prev().toggle(), !1
     }),
     $(".sound-bath-slider").slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: !0,
         arrows: !1,
         dots: !1,
         autoplaySpeed: 2e3,
         responsive: [{
             breakpoint: 1201,
             settings: {
                 slidesToShow: 3
             }
         }, {
             breakpoint: 992,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 481,
             settings: {
                 slidesToShow: 1
             }
         }, ]
     });

 $('.vya-short-list-wrap').slick({
     autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 3,
     slidesToScroll: 3,
     responsive: [{
         breakpoint: 1201,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 2
         }
     }, {
         breakpoint: 769,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1
         }
     }]
 });
 $(document).ready(function() {
     var showChartrustpilot = 87;
     var ellipsestexttrustpilot = "";
     var moretexttrustpilot = "Read More";
     var lesstexttrustpilot = "Read Less";
     $('.new-trustpilot-slider-review').each(function() {
         var contenttrustpilot = $(this).html();
         if (contenttrustpilot.length > showChartrustpilot) {
             var ctrustpilot = contenttrustpilot.substr(0, showChartrustpilot);
             var htrustpilot = contenttrustpilot.substr(showChartrustpilot, contenttrustpilot.length - showChartrustpilot);
             var htmltrustpilot = ctrustpilot + '<span class="moreellipses">' + ellipsestexttrustpilot + '&nbsp;</span><span class="morecontent"><span>' + htrustpilot + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretexttrustpilot + '</a></span>';
             $(this).html(htmltrustpilot);
         }
     });
     $(".morelink").click(function() {
         if ($(this).hasClass("less")) {
             $(this).removeClass("less");
             $(this).html(moretexttrustpilot);
         } else {
             $(this).addClass("less");
             $(this).html(lesstexttrustpilot);
         }
         $(this).parent().prev().toggle();
         $(this).prev().toggle();
         return false;
     });
 });

 $('.new-trustpilot-slider').slick({
     dots: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [{
         breakpoint: 1024,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 1
         }
     }, {
         breakpoint: 580,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1
         }
     }]
 });