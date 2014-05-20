(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  var menu, toggled, windowWidth;
  windowWidth = $(window).width();
  $("nav.mobile").addClass("hide");
  $("nav ul.main").addClass("hide");

  /*$(".menu-icon").addClass "hide" if windowWidth >= 768 */
  $("#menu-toggle").on("click", function() {
    if (windowWidth >= 768) {
      $("ul.main").toggleClass("hide");
    }
    if (windowWidth <= 768) {
      return $("nav.mobile").toggleClass("hide");
    }
  });
  $(window).resize(function() {
    windowWidth = $(window).width();
    if (windowWidth <= 768) {
      $("nav ul.main").addClass("hide");
    }
    if (windowWidth >= 768) {
      return $("nav.mobile").addClass("hide");
    }
  });

  /*menu toggle animation(facebook style) */
  menu = document.getElementById("menu-toggle");
  toggled = false;
  return menu.addEventListener("click", (function() {
    if (!toggled) {
      this.className = this.className + " toggled";
      return toggled = true;
    } else {
      this.className = this.className.replace(/\b\stoggled\b/, "");
      return toggled = false;
    }
  }), false);
});


},{}]},{},[1])