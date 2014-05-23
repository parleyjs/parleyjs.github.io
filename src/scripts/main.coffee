jQuery(document).ready ($) ->
  
  # quotes scroll
  bgscroll = ->
    current -= 1
    $("#quotes").css "backgroundPosition", (if (direction is "h") then current + "px 0" else "0 " + current + "px")
    return

  $("#top").hide()
  $(window).scroll ->
    if $(window).scrollTop() >= 600
      $("#top").fadeIn 500
    else
      $("#top").fadeOut 500
    return

  nav = $("nav#primary")
  content = $("#content")
  docs = $("#docs-content")
  navHomeY = nav.offset().top
  isFixed = false
  $w = $(window)
  $w.scroll ->
    scrollTop = $w.scrollTop()
    shouldBeFixed = scrollTop > navHomeY
    if shouldBeFixed and not isFixed
      nav.css
        position: "fixed"
        width: "100%"
        top: 0
        opacity: 0.9

      content.css paddingTop: "75px"
      docs.css paddingTop: "27px"
      isFixed = true
    else if not shouldBeFixed and isFixed
      nav.css
        position: "relative"
        width: "100%"
        opacity: 1

      content.css paddingTop: "0"
      docs.css paddingTop: "27px"
      isFixed = false
    return

  $(window).resize ->
    $("nav#primary").css width: "100%"
    return

  $(window).scroll ->
    scroll = $(window).scrollTop()
    slowScroll = scroll / 2
    $("#header").css transform: "translateY(" + slowScroll + "px)"
    return

  $(window).scroll ->
    if $(window).scrollTop() >= 400
      $("#copyright").css "z-index": 22
    else
      $("#copyright").css "z-index": 1
    return

  scrollSpeed = 80
  current = 0
  direction = "h"
  setInterval bgscroll, scrollSpeed
  
  # prettyprint
  $("pre").addClass "prettyprint"
  