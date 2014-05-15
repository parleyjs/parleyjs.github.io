# dropdown menu
$(document).ready ->
  windowWidth = $(window).width()
  ## Hide mobile menu on doc ready
  $("nav.mobile").addClass "hide"
  ## hide main nav if mobile / tablet
  $("nav ul.main").addClass "hide"
  ## hide toggle nav if desktop
  ###$(".menu-icon").addClass "hide" if windowWidth >= 768###
  # Set up the toggle.
  $("#menu-toggle").on "click", ->
    $("ul.main").toggleClass "hide" if windowWidth >= 768
    $("nav.mobile").toggleClass "hide" if windowWidth <= 768
  ## on window resize functions
  $(window).resize ->
    windowWidth = $(window).width()
    $("nav ul.main").addClass "hide"  if windowWidth <= 768
    $("nav.mobile").addClass "hide" if windowWidth >= 768
    
    
  ###menu toggle animation(facebook style)###
  menu = document.getElementById("menu-toggle")
  toggled = false
  menu.addEventListener "click", (->
    unless toggled
      @className = @className + " toggled"
      toggled = true
    else
      @className = @className.replace(/\b\stoggled\b/, "")
      toggled = false
  ), false