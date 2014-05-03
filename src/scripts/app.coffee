# dropdown menu
$(document).ready ->
  $toggle = $(".toggle-more")
  $moreInfo = $("#more-info")
  $moreInfo.hide()
  $toggle.on "click", ->
    $moreInfo.fadeToggle('fast')