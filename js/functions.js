/*!
 *#
 *#
 *#   __ \                                 ___|  |         |
 *#   |   |  _ \ __ `__ \   _ \  __ \    \___ \  __| |   | |  _ \
 *#   |   |  __/ |   |   | (   | |   |_____|   | |   |   | |  __/
 *#  ____/ \___|_|  _|  _|\___/ _|  _|   _____/ \__|\__, |_|\___|
 *#                                               ____/
 *#
 *#  This project is licensed under the MIT License
 *#  🌍 https://github.com/Demonicheart/demons/blob/master/LICENSE
 *#
 */

/* ================================  lazyload  ============================ */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e(t)):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=r(s,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}const s={src:"data-src",srcset:"data-srcset",selector:".lazyload"},r=function(){let t={},e=!1,s=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],s++);for(;s<o;s++)!function(s){for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e&&"[object Object]"===Object.prototype.toString.call(s[o])?t[o]=r(!0,t[o],s[o]):t[o]=s[o])}(arguments[s]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,s={root:null,rootMargin:"0px",threshold:[0]};this.observer=new IntersectionObserver(function(t){t.forEach(function(t){if(t.intersectionRatio>0){e.observer.unobserve(t.target);let s=t.target.getAttribute(e.settings.src),r=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(s&&(t.target.src=s),r&&(t.target.srcset=r)):t.target.style.backgroundImage="url("+s+")"}})},s),this.images.forEach(function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;this.images.forEach(function(e){let s=e.getAttribute(t.settings.src),r=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(s&&(e.src=s),r&&(e.srcset=r)):e.style.backgroundImage="url("+s+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,s){return new e(t,s)},t.jQuery){const s=t.jQuery;s.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(s.makeArray(this),t),this}}return e});$("img.lazyload").lazyload();$("div.lazyload").lazyload();$("a.lazyload").lazyload();$("img.lazy").lazyload(),$("div.lazy").lazyload(),$(document).ready(function(){$("img").each(function(){var e=$(this),t=e.attr("src");e.attr("alt",t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")))})});

/* ================================  jarallax ============================ */
$(".jarallax").jarallax({speed:.2});

/* ================================  navbar  ============================ */
 $(document).ready(function(){function a(){50<$(".navbar").offset().top?$(".fixed-top").addClass("top-nav-collapse"):$(".fixed-top").removeClass("top-nav-collapse")}a();$(window).scroll(function(){a()})});
$(document).click(function(a){var l=$(a.target),s=$(".navbar-collapse").hasClass("show");s!==!0||l.hasClass("navbar-toggler")||$("button.navbar-toggler").click()});

/* ================================  toastr options  =========================== */
$(document).ready(function(){toastr.options = {"closeButton": true,"debug": false,"newestOnTop": false,"progressBar": false,"positionClass": "md-toast-top-right","preventDuplicates": false,"onclick": null,"showDuration": 300,"hideDuration": 1000,"timeOut": 5000,"extendedTimeOut": 1000,"showEasing": "swing","hideEasing": "linear","showMethod": "fadeIn","hideMethod": "fadeOut"}});
/* ================================  toastr alerts  ============================ */
$("#alert-info").click(function () {toastr["info"]("Hi! Happy New Year!")});$("#alert-success").click(function () {toastr["success"]("Hi! still under construction!")});

/* ================================  wordsrotator = function  ============================ */
(function(d){d.fn.wordsrotator=function(f){var a=d.extend({},{autoLoop:!0,randomize:!1,stopOnHover:!1,changeOnClick:!1,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2E3},f),c,h=[];return this.each(function(){var f=d(this),e=d("#"+f.attr("id")),b=[];if(a.words||a.words instanceof Array){b=d.extend(!0,[],a.words);a.randomize&&(h=d.extend(!0,[],b));c=0;a.randomize&&(c=Math.floor(Math.random()*b.length));e.html(b[c]);var g=function(){e.html("<span class='wordsrotator_wordOut'><span>"+
b[c]+"</span></span>");a.randomize?(b.splice(c,1),0==b.length&&(b=d.extend(!0,[],h)),c=Math.floor(Math.random()*b.length)):(b.length==c+1&&(c=-1),c++);d("<span class='wordsrotator_wordIn'>"+b[c]+"</span>").appendTo(e);e.wrapInner("<span class='wordsrotator_words' />");e.find(".wordsrotator_wordOut").addClass("animated "+a.animationOut);e.find(".wordsrotator_wordIn").addClass("animated "+a.animationIn)};e.on("click",function(){if(a.changeOnClick)return g(),!1});if(a.autoLoop){var k=setInterval(g,a.speed);
a.stopOnHover&&e.hover(function(){window.clearInterval(k)},function(){k=setInterval(g,a.speed)})}}})}})(jQuery);$(document).ready(function(){$("#sub-title").wordsrotator({words:['<span class="indigo-text font-weight-bold">incredibly</span>','<span class="indigo-text font-weight-bold">especially</span>','<span class="indigo-text font-weight-bold">extremely</span>'],animationIn:"bounceIn",animationOut:"bounceOut",stopOnHover:!0,changeOnClick:!0,speed:3E3})});

/* ==================  Modal   ================ */
$(function () { $("#myModal").on("shown.bs.modal",function(){$("#myInput").focus()});});

/* ==================  select  ================ */
$(function () { $(".mdb-select").material_select()});

/* ==================  Toogle-Tooltip  ================ */
$(function () { $('[data-toggle="tooltip"]').tooltip() });

/* ================== DateTime ================ */
$(document).ready(function(){
  var a=(new Date).getFullYear();
  $(".year").html(a);a=new Date;document.getElementById("dateonly").innerHTML=" "+("0"+a.getDate()).slice(-2)+"."+("0"+(a.getMonth()+1)).slice(-2)+"."+a.getFullYear()+" ";a=new Date;document.getElementById("timeonly").innerHTML=" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)
});

/* ==================  lightbox  ================ */
$(function(){$("#mdb-lightbox-ui").load("https://cdn.jsdelivr.net/gh/demonicheart/demons@1.3/addons/ds-lightbox-ui.html")});

 /* ================== contact - form ================ */
function validateForm() {
    // var x =  document.getElementById('name').value;
    // if (x == "") {
    //     document.getElementById('stat').innerHTML = "Name cannot be empty";
    //     return false;
    // }
    // x =  document.getElementById('email').value;
    // if (x == "") {
    //     document.getElementById('stat').innerHTML = "Email cannot be empty";
    //     return false;
    // } else {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(!re.test(x)){
    //         document.getElementById('stat').innerHTML = "Email format invalid";
    //         return false;
    //     }
    // }
    // x =  document.getElementById('subject').value;
    // if (x == "") {
    //     document.getElementById('stat').innerHTML = "Subject cannot be empty";
    //     return false;
    // }
    // x =  document.getElementById('message').value;
    // if (x == "") {
    //     document.getElementById('stat').innerHTML = "Message cannot be empty";
    //     return false;
    // }
 //get input field values data to be sent to server
    document.getElementById('stat').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        'message'  : $('textarea[name=message]').val()
    };

   $.ajax({
    url : "mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStat, jqXHR)
    {
        $('#stat').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStat, errorThrown)
    {
        $('#stat').text(jqXHR);
    }
});

}
/* ================== ScrollToTop ================ */
jQuery(document).ready(function() {
    var offset = 100;
    var duration = 250;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".scrolltotop").fadeIn(duration).addClass("fadeInRight").removeClass("fadeOutRight");
        } else {
            jQuery(".scrolltotop").fadeOut(duration).addClass("fadeOutRight").removeClass("fadeInRight");
            }
    });
    jQuery('.scrolltotop').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 600);
            return false;
        })
});

// Copyright 2014-2017 The Bootstrap Authors // Copyright 2014-2017 Twitter, Inc. // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
var msViewportStyle = document.createElement('style')
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
document.head.appendChild(msViewportStyle)};

// Android stock browser - Select menu
$(function () {
var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
$('select.form-control').removeClass('form-control').css('width', '100%')}});

 /* ================== console.log ================ */
new WOW().init();console.log('%c 📑 page ★ loaded 🎌 ', 'color: #303f9f; font-weight: bold;');
