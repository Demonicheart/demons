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
///* loadCSS. [c]2017 Filament Group, Inc. MIT License */
(function(a){var b=function(b,f,n){function e(a){if(g.body)return a();setTimeout(function(){e(a)})}function c(){d.addEventListener&&d.removeEventListener("load",c);d.media=n||"all"}var g=a.document,d=g.createElement("link");if(f)var h=f;else{var l=(g.body||g.getElementsByTagName("head")[0]).childNodes;h=l[l.length-1]}var m=g.styleSheets;d.rel="stylesheet";d.href=b;d.media="only x";e(function(){h.parentNode.insertBefore(d,f?h:h.nextSibling)});var k=function(a){for(var b=d.href,c=m.length;c--;)if(m[c].href===
b)return a();setTimeout(function(){k(a)})};d.addEventListener&&d.addEventListener("load",c);d.onloadcssdefined=k;k(c);return d};"undefined"!==typeof exports?exports.loadCSS=b:a.loadCSS=b})("undefined"!==typeof global?global:this);
/* onloadCSS. (onload callback for loadCSS) [c]2017 Filament Group, Inc. MIT License */
function onloadCSS(a,b){function c(){!f&&b&&(f=!0,b.call(a))}var f;a.addEventListener&&a.addEventListener("load",c);a.attachEvent&&a.attachEvent("onload",c);if("isApplicationInstalled"in navigator&&"onloadcssdefined"in a)a.onloadcssdefined(c)};
/* loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
(function(a){if(a.loadCSS){var b=loadCSS.relpreload={};b.support=function(){try{return a.document.createElement("link").relList.supports("preload")}catch(f){return!1}};b.poly=function(){for(var b=a.document.getElementsByTagName("link"),c=0;c<b.length;c++){var e=b[c];"preload"===e.rel&&"style"===e.getAttribute("as")&&(a.loadCSS(e.href,e,e.getAttribute("media")),e.rel=null)}};if(!b.support()){b.poly();var c=a.setInterval(b.poly,300);a.addEventListener&&a.addEventListener("load",function(){b.poly();
a.clearInterval(c)});a.attachEvent&&a.attachEvent("onload",function(){a.clearInterval(c)})}}})(this);

/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
/* cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(c){var f=function(b,d,e){if(void 0===d)return b=("; "+c.document.cookie).split("; "+b+"="),2===b.length?b.pop().split(";").shift():null;!1===d&&(e=-1);var a="";e&&(a=new Date,a.setTime(a.getTime()+864E5*e),a="; expires="+a.toGMTString());c.document.cookie=b+"="+d+a+"; path=/"};"undefined"!==typeof module?module.exports=f:c.cookie=f})("undefined"!==typeof global?global:this);

var font = new FontFaceObserver('Roboto', {
  weight: 400
});

font.load().then(function () {
  console.log('Font is available');
}, function () {
  console.log('Font is not available');
});
var font = new FontFaceObserver('Roboto');

font.load().then(function () {
  document.documentElement.className += " fonts-loaded";
});
	/*
	Fonts are loaded through @font-face rules in the CSS whenever an element references them.
	FontFaceObserver creates a referencing element to trigger the font request, and lsisten for font load events.
	When all 3 fonts are loaded, we enable them by adding a class to the html element
*/
function Cookies(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    } 
    else {
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
(function( w ){
    // if the class is already set, we're good.
    if( w.document.documentElement.className.indexOf( " fonts-loaded" ) > -1 ){
        return;
    }
    var fontA = new w.FontFaceObserver( "Roboto", {
        weight: 300
    });
    var fontB = new w.FontFaceObserver( "Roboto", {
        weight: 400
    });
    var fontC = new w.FontFaceObserver( "Roboto", {
        weight: 500
    });
    var fontD = new w.FontFaceObserver( "Roboto", {
        weight: 700,
    });
    w.Promise
        .all([fontA.check(), fontB.check(), fontC.check(), fontD.check()])
        .then(function(){
            w.document.documentElement.className += " fonts-loaded";
            console.log("Font - loaded"); }, function() { console.log("Font is not available");
            Cookies(" fonts-loaded", true, 365);
        });
}( this ));

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
/* ================================  lazyload  ============================ */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e(t)):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}var r={src:"data-src",srcset:"data-srcset",selector:".lazyload"},s=function(){var t={},e=!1,r=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);o>r;r++){var i=void 0,n=arguments[r];for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=s(!0,t[i],n[i]):t[i]=n[i])}return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();var e=this;this.observer=new IntersectionObserver(function(t){t.forEach(function(t){if(0<t.intersectionRatio){e.observer.unobserve(t.target);var r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},{root:null,rootMargin:"0px",threshold:[0]}),this.images.forEach(function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(this.settings){var t=this;this.images.forEach(function(e){var r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url("+r+")"})}},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){var o=t.jQuery;o.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(o.makeArray(this),t),this}}return e});$("img.lazyload").lazyload();$("div.lazyload").lazyload();$("img.lazy").lazyload(),$("div.lazy").lazyload(),$(document).ready(function(){$("img").each(function(){var e=$(this),t=e.attr("src");e.attr("alt",t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")))})})
/* ================================  cookieconsent + domain  ============================ */

/* ================================  navbar  ============================ */
$(document).ready(function() { $(document).click(function(event) { var clickover = $(event.target); var _opened = $(".navbar-collapse").hasClass("show"); if (_opened === true && !clickover.hasClass("navbar-toggler")) { $("button.navbar-toggler-right").click(); } }); });
/*  checkOffset navbar*/
$(document).ready(function() {
function checkOffset(){$(".navbar").offset().top>50?$(".fixed-top").addClass("top-nav-collapse"):$(".fixed-top").removeClass("top-nav-collapse")}
checkOffset();
$(window).scroll(function(){checkOffset()});
});
/* ================================  toastr options  ============================ */
    $(document).ready(function() { toastr.options = { closeButton: !0, debug: !1, newestOnTop: !1, progressBar: !1, positionClass: "toast-top-right", preventDuplicates: !1, onclick: null, showDuration: "300", hideDuration: "1000", timeOut: "5000", extendedTimeOut: "1000", showEasing: "swing", hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut" } });
/* ================================  wordsrotator = function  ============================ */
(function($){$.fn.wordsrotator=function(options){var defaults={autoLoop:true,randomize:false,stopOnHover:false,changeOnClick:false,words:null,animationIn:"flipInY",animationOut:"flipOutY",speed:2000};var settings=$.extend({},defaults,options);var listItem
var array_bak=[];return this.each(function(){var el=$(this)
var cont=$("#"+el.attr("id"));var array=[];if((settings.words)||(settings.words instanceof Array)){array=$.extend(true,[],settings.words);if(settings.randomize)array_bak=$.extend(true,[],array);listItem=0
if(settings.randomize)listItem=Math.floor(Math.random()*array.length)
cont.html(array[listItem]);var rotate=function(){cont.html("<span class='wordsrotator_wordOut'><span>"+array[listItem]+"</span></span>");if(settings.randomize){array.splice(listItem,1);if(array.length==0)array=$.extend(true,[],array_bak);listItem=Math.floor(Math.random()*array.length);}else{if(array.length==listItem+1)listItem=-1;listItem++;}
$("<span class='wordsrotator_wordIn'>"+array[listItem]+"</span>").appendTo(cont);cont.wrapInner("<span class='wordsrotator_words' />");cont.find(".wordsrotator_wordOut").addClass("animated "+settings.animationOut);cont.find(".wordsrotator_wordIn").addClass("animated "+settings.animationIn);};cont.on("click",function(){if(settings.changeOnClick){rotate();return false;};});if(settings.autoLoop){var t=setInterval(rotate,settings.speed);if(settings.stopOnHover){cont.hover(function(){window.clearInterval(t)},function(){t=setInterval(rotate,settings.speed);});};}};});}}(jQuery));
$(document).ready(function() { $("#sub-title").wordsrotator({ words: ['<span class="indigo-text font-bold">incredibly</span>', '<span class="indigo-text font-bold">especially</span>', '<span class="indigo-text font-bold">extremely</span>'], animationIn: "bounceIn", animationOut: "bounceOut", stopOnHover: !0, changeOnClick: !0, speed: 3e3 }) });
/* ==================   easeScroll + tooltip ================ */
    $(document).ready(function() { $(function() { $('[data-toggle="tooltip"]').tooltip() }) });
    $(document).ready(function() { $("html").easeScroll() });
/* ================== Year Update ================ */
var curYear = new Date().getFullYear();
$('.year').html(curYear);
/* ================== dateonly time Update ================ */
var dt=new Date;document.getElementById("dateonly").innerHTML=" "+("0"+dt.getDate()).slice(-2)+"."+("0"+(dt.getMonth()+1)).slice(-2)+"."+dt.getFullYear()+" ",dt=new Date,document.getElementById("timeonly").innerHTML=" "+("0"+dt.getHours()).slice(-2)+":"+("0"+dt.getMinutes()).slice(-2);
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
/* ================== GoogleAnalytics ================ */

/* ================== initPage ================ */
function initPage(){

/* ================== console.log ================ */
  console.log('📑 page ★ loaded 🎌');

/* ================== initPage ende ================ */
    };
