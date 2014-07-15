(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
jQuery(document).ready(function($) {
  var $w, bgscroll, content, current, direction, docs, isFixed, nav, navHomeY, scrollSpeed, setHeight, setWidth;
  setHeight = function() {
    var headerHeight, navHeight, windowHeight;
    windowHeight = $(window).innerHeight();
    navHeight = $("#primary").innerHeight();
    headerHeight = windowHeight - navHeight;
    $("#header .boxed").css("min-height", headerHeight);
  };
  setHeight();
  setWidth = function() {
    var codeWidth;
    codeWidth = $(".code-editor").innerWidth();
    $("#primary .boxed").css("min-width", codeWidth);
  };
  setWidth();
  bgscroll = function() {
    current -= 1;
    $("#quotes").css("backgroundPosition", (direction === "h" ? current + "px 0" : "0 " + current + "px"));
  };
  $("#top").hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 600) {
      $("#top").fadeIn(500);
    } else {
      $("#top").fadeOut(500);
    }
  });
  nav = $("nav#primary");
  content = $("#content");
  docs = $("#docs-content");
  navHomeY = nav.offset().top;
  console.log(navHomeY);
  isFixed = false;
  $w = $(window);
  $w.scroll(function() {
    var scrollTop, shouldBeFixed;
    scrollTop = $w.scrollTop();
    shouldBeFixed = scrollTop > navHomeY;
    if (shouldBeFixed && !isFixed) {
      nav.css({
        position: "fixed",
        width: "100%",
        top: 0,
        opacity: 0.9
      });
      content.css({
        paddingTop: "75px"
      });
      docs.css({
        paddingTop: "27px"
      });
      isFixed = true;
    } else if (!shouldBeFixed && isFixed) {
      nav.css({
        position: "relative",
        width: "100%",
        opacity: 1
      });
      content.css({
        paddingTop: "0"
      });
      docs.css({
        paddingTop: "27px"
      });
      isFixed = false;
    }
  });
  $(window).resize(function() {
    $("nav#primary").css({
      width: "100%"
    });
    navHomeY = nav.offset().top;
    return setWidth();
  });
  $(window).scroll(function() {
    var scroll, slowScroll;
    scroll = $(window).scrollTop();
    slowScroll = scroll / 2;
    $("#header").css({
      transform: "translateY(" + slowScroll + "px)"
    });
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
      $("#copyright").css({
        "z-index": 22
      });
    } else {
      $("#copyright").css({
        "z-index": 1
      });
    }
  });
  scrollSpeed = 80;
  current = 0;
  direction = "h";
  setInterval(bgscroll, scrollSpeed);
  return $("pre").addClass("prettyprint");
});


},{}]},{},[1])