/*!
 *#   __ \                                 ___|  |         |
 *#   |   |  _ \ __ `__ \   _ \  __ \    \___ \  __| |   | |  _ \
 *#   |   |  __/ |   |   | (   | |   |_____|   | |   |   | |  __/
 *#  ____/ \___|_|  _|  _|\___/ _|  _|   _____/ \__|\__, |_|\___|
 *#                                               ____/
 *# Author           : Demonicheart
 *# Version          : 2.0.0
 *# Created          : February 2018
 *# File Description : Js file of the template
 *#
 *# This project is licensed under the MIT License
 *# 🌍 https://github.com/Demonicheart/demons/blob/master/LICENSE
 *#
 */

/* ==================  lazyload 2.0.0-rc.2 =================== */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});$("img.lazyload").lazyload();$("div.lazyload").lazyload();$("a.lazyload").lazyload();$("img.lazy").lazyload(),$("div.lazy").lazyload(),$(document).ready(function(){$("img").each(function(){var e=$(this),t=e.attr("src");e.attr("alt",t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")))})})
// var img = document.getElementById('imageid'); var width = img.naturalWidth;var height = img.naturalHeight;$( document ).ready(function() {$('div.aspectRatioPlaceholder').find('*').attr('data-width', width);$('div.aspectRatioPlaceholder').find('*').attr('data-height', height)});

/* ==================== SmoothScrollWheel ==================== */
!function(){var s,i,c,a,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,u=!1,d=!1,l={x:0,y:0},f=!1,m=document.documentElement,h=[],w=/^Mac/.test(navigator.platform),v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function b(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",D),top!=self)d=!0;else if(Q&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){r||(r=setTimeout(function(){u||(a.style.height="0",a.style.height=m.scrollHeight+"px",r=null)},500))},setTimeout(c,10),Y("resize",c);if((i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}p.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var g=[],S=!1,x=Date.now();function k(d,f,m){var e,t;if(e=0<(e=f)?1:-1,t=0<(t=m)?1:-1,(l.x!==e||l.y!==t)&&(l.x=e,l.y=t,g=[],x=0),1!=p.accelerationMax){var o=Date.now()-x;if(o<p.accelerationDelta){var n=(1+50/o)/2;1<n&&(n=Math.min(n,p.accelerationMax),f*=n,m*=n)}x=Date.now()}if(g.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!S){var r=q(),h=d===r||d===document.body;null==d.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto");var w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<g.length;r++){var a=g[r],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=F(c));var s=a.x*c-a.lastX>>0,u=a.y*c-a.lastY>>0;o+=s,n+=u,a.lastX+=s,a.lastY+=u,i&&(g.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),f||m||(g=[]),g.length?j(w,d,1e3/p.frameRate+1):(S=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))};j(w,d,0),S=!0}}function e(e){f||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}},1e3);var t=120<e&&P(e);return!P(120)&&!P(100)&&!t}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),k(r,o,n),e.preventDefault(),void C()):!d||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==v.spacebar;document.body.contains(s)||(s=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===v.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&y[e.keyCode])return!0;var r=0,a=0,l=z(s);if(!l)return!d||!W||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case v.up:a=-p.arrowScroll;break;case v.down:a=p.arrowScroll;break;case v.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case v.pageup:a=.9*-i;break;case v.pagedown:a=.9*i;break;case v.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case v.end:var c=l.scrollHeight-l.scrollTop-i;a=0<c?c+10:0;break;case v.left:r=-p.arrowScroll;break;case v.right:r=p.arrowScroll;break;default:return!0}k(l,r,a),e.preventDefault(),C()}function t(e){s=e.target}var n,r,M=(n=0,function(e){return e.uniqueID||(e.uniqueID=n++)}),E={},T={},B={};function C(){clearTimeout(r),r=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(m)&&O(o)||X(m);if(d&&L(m)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(h[0],e)&&K(h[1],e)&&K(h[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function V(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}function F(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=V(1)),V(e))}var I=window.navigator.userAgent,_=/Edge/.test(I),W=/chrome/i.test(I)&&!_,U=/safari/i.test(I)&&!_,G=/mobile/i.test(I),J=/Windows NT 6.1/i.test(I)&&/rv:11/i.test(I),Q=U&&(/Version\/8/i.test(I)||/Version\/9/i.test(I)),Z=(W||U||J)&&!G,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(e){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}oe&&Z&&(Y(oe,e,te),Y("mousedown",t),Y("load",b)),ne.destroy=function(){i&&i.disconnect(),A(oe,e),A("mousedown",t),A("keydown",D),A("resize",c),A("load",b)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}();

/* ========================= jarallax ======================== */
$(".jarallax").jarallax({speed:.2});
// jarallax(document.querySelectorAll('.jarallax'), {
//     disableParallax: /iPad|iPhone|iPod|Android/,
//     disableVideo: /iPad|iPhone|iPod|Android/
// });
// jarallax(document.querySelectorAll('.jarallax'), {
//     disableParallax: function () {
//         return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
//     },
//     disableVideo: function () {
//         return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
//     }
// });
// jQuery(document).ready(function($) {
//     $(window).resize(function() {
//         $('.jarallax').jarallax('onResize');
//         $('.jarallax').css('width', $(window).width() + 'px');
//      });
//     $(window).on('orientationchange', function() {
//         $('.jarallax').jarallax('onResize');
//         $('.jarallax').css('width', $(window).width() + 'px');
//      });
// });

/* ========================  navbar  ========================= */
// $(document).ready(function(){$(document).click(function(a){a=$(a.target);!0!==$(".navbar-collapse").hasClass("show")||a.hasClass("navbar-toggler")||$(".navbar-toggler").click()})});
/*  checkOffset navbar*/
 $(document).ready(function(){function a(){50<$(".navbar").offset().top?$(".fixed-top").addClass("top-nav-collapse"):$(".fixed-top").removeClass("top-nav-collapse")}a();$(window).scroll(function(){a()})});
// $(document).click(function(e) {
//     var t = $(e.target),
//         n = $(".navbar-collapse").hasClass("show");
//     n !== !0 || t.hasClass("navbar-toggler") || $("button.navbar-toggler").click()
// }),
$(document).click(function(a){var l=$(a.target),s=$(".navbar-collapse").hasClass("show");s!==!0||l.hasClass("navbar-toggler")||$("button.navbar-toggler").click()});

/* ====================  toastr  options  ==================== */
$(document).ready(function(){toastr.options = {"closeButton": true,"debug": false,"newestOnTop": false,"progressBar": false,"positionClass": "md-toast-top-right","preventDuplicates": false,"onclick": null,"showDuration": 300,"hideDuration": 1000,"timeOut": 5000,"extendedTimeOut": 1000,"showEasing": "swing","hideEasing": "linear","showMethod": "fadeIn","hideMethod": "fadeOut"}});
/* ====================  toastr - alerts  ==================== */
$("#alert-info").click(function () {toastr["info"]("Hi! Happy New Year!")});$("#alert-success").click(function () {toastr["success"]("Hi! still under construction!")});

/* =================  wordsrotator=function  ================= */
(function(d){d.fn.wordsrotator=function(f){var a=d.extend({},{autoLoop:!0,randomize:!1,stopOnHover:!1,changeOnClick:!1,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2E3},f),c,h=[];return this.each(function(){var f=d(this),e=d("#"+f.attr("id")),b=[];if(a.words||a.words instanceof Array){b=d.extend(!0,[],a.words);a.randomize&&(h=d.extend(!0,[],b));c=0;a.randomize&&(c=Math.floor(Math.random()*b.length));e.html(b[c]);var g=function(){e.html("<span class='wordsrotator_wordOut'><span>"+
b[c]+"</span></span>");a.randomize?(b.splice(c,1),0==b.length&&(b=d.extend(!0,[],h)),c=Math.floor(Math.random()*b.length)):(b.length==c+1&&(c=-1),c++);d("<span class='wordsrotator_wordIn'>"+b[c]+"</span>").appendTo(e);e.wrapInner("<span class='wordsrotator_words' />");e.find(".wordsrotator_wordOut").addClass("animated "+a.animationOut);e.find(".wordsrotator_wordIn").addClass("animated "+a.animationIn)};e.on("click",function(){if(a.changeOnClick)return g(),!1});if(a.autoLoop){var k=setInterval(g,a.speed);
a.stopOnHover&&e.hover(function(){window.clearInterval(k)},function(){k=setInterval(g,a.speed)})}}})}})(jQuery);$(document).ready(function(){$("#sub-title").wordsrotator({words:['<span class="indigo-text font-weight-bold">incredibly</span>','<span class="indigo-text font-weight-bold">especially</span>','<span class="indigo-text font-weight-bold">extremely</span>'],animationIn:"bounceIn",animationOut:"bounceOut",stopOnHover:!0,changeOnClick:!0,speed:3E3})});

/* =========================  Modal  ========================= */
$(function () { $("#myModal").on("shown.bs.modal",function(){$("#myInput").focus()});});


/* ========================== select ========================= */
$(function () { $(".mdb-select").materialSelect()});
/* ====================  Toogle--Tooltip  ==================== */
$(function () { $('[data-toggle="tooltip"]').tooltip() });

/* ========================== DateTime ======================= */
$(document).ready(function(){
  var a=(new Date).getFullYear();
  $(".year").html(a);a=new Date;document.getElementById("dateonly").innerHTML=" "+("0"+a.getDate()).slice(-2)+"."+("0"+(a.getMonth()+1)).slice(-2)+"."+a.getFullYear()+" ";a=new Date;document.getElementById("timeonly").innerHTML=" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)
});

/* =======================  lightbox  ======================== */
$(function(){$("#mdb-lightbox-ui").load("https://cdn.jsdelivr.net/gh/demonicheart/demons@3/addons/ds-lightbox-ui.html")});

/* ===================== contact - form ====================== */
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

};

/* ======================= ScrollToTop ======================= */
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
        // jQuery('html, body').animate({scrollTop: 0}, 600, 'easeInOutExpo');
            return false;
        })
});

// Copyright 2014-2017 The Bootstrap Authors // Copyright 2014-2017 Twitter, Inc. // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// Internet Explorer 10 in Windows 8 and Windows Phone 8
// @-webkit-viewport   { width: device-width; }
// @-moz-viewport      { width: device-width; }
// @-ms-viewport       { width: device-width; }
// @-o-viewport        { width: device-width; }
// @viewport           { width: device-width; }
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
var msViewportStyle = document.createElement('style')
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
document.head.appendChild(msViewportStyle)}

// Android stock browser - Select menu
$(function () {
var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
$('select.form-control').removeClass('form-control').css('width', '100%')}});

 /* ===================== console -- log ===================== */
new WOW().init();console.log('%c 📑 page ★ loaded 🎌 ', 'color: #303f9f; font-family: sans-serif;font-weight: 700;text-shadow: #000 1px 1px;');
/*$('head').append('<link href="style2.css" rel="stylesheet" />');*/
/* setTimeout(function(){new WOW().init();}*/
