/*!
 *#
 *#
 *#         /$$
 *#        | $$
 *#    /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$
 *#   /$$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$
 *#  | $$  | $$| $$$$$$$$| $$ \ $$ \ $$| $$  \ $$| $$  \ $$
 *#  | $$  | $$| $$_____/| $$ | $$ | $$| $$  | $$| $$  | $$
 *#  |  $$$$$$$|  $$$$$$$| $$ | $$ | $$|  $$$$$$/| $$  | $$
 *#   \_______/ \_______/|__/ |__/ |__/ \______/ |__/  |__/
 *#
 *#
 *#
 *#  This project is licensed under the MIT License
 *# 🌍 https://github.com/Demonicheart/demons/blob/master/LICENSE
 */
/* ================================  lazyload  ============================ */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e(t)):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=r(s,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}const s={src:"data-src",srcset:"data-srcset",selector:".lazyload"},r=function(){let t={},e=!1,s=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],s++);for(;s<o;s++)!function(s){for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e&&"[object Object]"===Object.prototype.toString.call(s[o])?t[o]=r(!0,t[o],s[o]):t[o]=s[o])}(arguments[s]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,s={root:null,rootMargin:"0px",threshold:[0]};this.observer=new IntersectionObserver(function(t){t.forEach(function(t){if(t.intersectionRatio>0){e.observer.unobserve(t.target);let s=t.target.getAttribute(e.settings.src),r=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(s&&(t.target.src=s),r&&(t.target.srcset=r)):t.target.style.backgroundImage="url("+s+")"}})},s),this.images.forEach(function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;this.images.forEach(function(e){let s=e.getAttribute(t.settings.src),r=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(s&&(e.src=s),r&&(e.srcset=r)):e.style.backgroundImage="url("+s+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,s){return new e(t,s)},t.jQuery){const s=t.jQuery;s.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(s.makeArray(this),t),this}}return e});$("img.lazyload").lazyload();$("div.lazyload").lazyload();$("a.lazyload").lazyload();$("img.lazy").lazyload(),$("div.lazy").lazyload(),$(document).ready(function(){$("img").each(function(){var e=$(this),t=e.attr("src");e.attr("alt",t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")))})})
// var img = document.getElementById('imageid'); var width = img.naturalWidth;var height = img.naturalHeight;$( document ).ready(function() {$('div.aspectRatioPlaceholder').find('*').attr('data-width', width);$('div.aspectRatioPlaceholder').find('*').attr('data-height', height)});
/* ================================  jarallax ============================ */
$(".jarallax").jarallax({speed:.2});
/* ================================  cookieconsent + domain  ============================ */

/* ================================  WebFontloader  ============================ */
  WebFontConfig={custom:{families:['Roboto:,n2,n3,n4,n5,n7','FontAwesome:n4'],urls:["css/fonts.css"]},
  active: function() {sessionStorage.fonts = true;}
};
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://cdn.jsdelivr.net/gh/demonicheart/demons@up/js/webfontloader.min.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    })();

    (function() {
      if (sessionStorage.fonts) {
        console.log("Fonts installed.");
        document.documentElement.classList.add('wf-active');
      } else {
        console.log("No fonts installed.");
      }
    })();

/* ================================  navbar  ============================ */
 $(document).ready(function(){function a(){50<$(".navbar").offset().top?$(".fixed-top").addClass("top-nav-collapse"):$(".fixed-top").removeClass("top-nav-collapse")}a();$(window).scroll(function(){a()})});
$(document).click(function(a){var l=$(a.target),s=$(".navbar-collapse").hasClass("show");s!==!0||l.hasClass("navbar-toggler")||$("button.navbar-toggler").click()});
/* ================================  toastr options  =========================== */
$(document).ready(function(){toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}});
/* ================================  toastr alerts  ============================ */
// $("#alert-info").click(function () {toastr["info"]("Hi! I am info message!")});$("#alert-success").click(function () {toastr["success"]("Hi! I am success message!")});
/* ================================  wordsrotator = function  ============================ */
(function(d){d.fn.wordsrotator=function(f){var a=d.extend({},{autoLoop:!0,randomize:!1,stopOnHover:!1,changeOnClick:!1,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2E3},f),c,h=[];return this.each(function(){var f=d(this),e=d("#"+f.attr("id")),b=[];if(a.words||a.words instanceof Array){b=d.extend(!0,[],a.words);a.randomize&&(h=d.extend(!0,[],b));c=0;a.randomize&&(c=Math.floor(Math.random()*b.length));e.html(b[c]);var g=function(){e.html("<span class='wordsrotator_wordOut'><span>"+
b[c]+"</span></span>");a.randomize?(b.splice(c,1),0==b.length&&(b=d.extend(!0,[],h)),c=Math.floor(Math.random()*b.length)):(b.length==c+1&&(c=-1),c++);d("<span class='wordsrotator_wordIn'>"+b[c]+"</span>").appendTo(e);e.wrapInner("<span class='wordsrotator_words' />");e.find(".wordsrotator_wordOut").addClass("animated "+a.animationOut);e.find(".wordsrotator_wordIn").addClass("animated "+a.animationIn)};e.on("click",function(){if(a.changeOnClick)return g(),!1});if(a.autoLoop){var k=setInterval(g,a.speed);
a.stopOnHover&&e.hover(function(){window.clearInterval(k)},function(){k=setInterval(g,a.speed)})}}})}})(jQuery);$(document).ready(function(){$("#sub-title").wordsrotator({words:['<span class="indigo-text font-weight-bold">incredibly</span>','<span class="indigo-text font-weight-bold">especially</span>','<span class="indigo-text font-weight-bold">extremely</span>'],animationIn:"bounceIn",animationOut:"bounceOut",stopOnHover:!0,changeOnClick:!0,speed:3E3})});
/* ==================   easeScroll + tooltip ================ */
    $(document).ready(function() { $(function() { $('[data-toggle="tooltip"]').tooltip() }) });
    $(document).ready(function() { $("html").easeScroll() });

$(document).ready(function(){
/* ================== Year Update ================ */
var curYear = new Date().getFullYear();
$('.year').html(curYear);
/* ================== dateonly time Update ================ */
var dt=new Date;document.getElementById("dateonly").innerHTML=" "+("0"+dt.getDate()).slice(-2)+"."+("0"+(dt.getMonth()+1)).slice(-2)+"."+dt.getFullYear()+" ",dt=new Date,document.getElementById("timeonly").innerHTML=" "+("0"+dt.getHours()).slice(-2)+":"+("0"+dt.getMinutes()).slice(-2)
});
/* ================== scrolltotop ================ */
jQuery(document).ready(function(){var offset = 100;var duration = 250;
jQuery(window).scroll(function(){if (jQuery(this).scrollTop() > offset){jQuery(".scrolltotop").fadeIn(duration).addClass("fadeInRight").removeClass("fadeOutRight")}
else{jQuery(".scrolltotop").fadeOut(duration).addClass("fadeOutRight").removeClass("fadeInRight")}
}
);
jQuery('.scrolltotop').click(function(event){event.preventDefault();
jQuery('html,body').animate({scrollTop:0}
,600);return false}
)}

/* ================== scrolltotop ende ================ */
);
/* ================== Granim ================ */
$(document).ready(function() {
var granimInstance = new Granim({
element: '#canvas-radial',name: 'radial-gradient',direction: 'radial',opacity: [1, 1],isPausedWhenNotInView: true,states : {"default-state": {gradients: [['#ffb347', '#ffcc33'],['#83a4d4', '#b6fbff'],['#9D50BB', '#6E48AA']]}}});
});
// Copyright 2014-2017 The Bootstrap Authors // Copyright 2014-2017 Twitter, Inc. // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
var msViewportStyle = document.createElement('style')
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
document.head.appendChild(msViewportStyle)}
// Select menu
$(function () {
var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {
$('select.form-control').removeClass('form-control').css('width', '100%')}});
/* ================== particles-js ================ */
// particlesJS("particles-js",{particles:{number:{value:110,density:{enable:!0,value_area:400}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,
// out_mode:"out",attract:{enable:!1,rotateX:300,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:50,duration:2,opacity:8,speed:3},repulse:{distance:100},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});
/* ================== AniView ================ */
/*$('.aniview').AniView();*/
/* ================== Granim ================ */
// $(document).ready(function() {
// 'use strict';
// var granimInstance = new Granim({
// element: '#canvas-radial',name: 'radial-gradient',direction: 'radial',opacity: [1, 1],isPausedWhenNotInView: true,states : {"default-state": {gradients: [['#ffb347', '#ffcc33'],['#83a4d4', '#b6fbff'],['#9D50BB', '#6E48AA']]}}});
// });
/* ================== GoogleAnalytics ================ */

/* ================== initPage ================ */
// function initPage(){

/* ================== console.log ================ */
 new WOW().init();console.log('📑 page ★ loaded 🎌');

/* ================== initPage ende ================ */
    // };