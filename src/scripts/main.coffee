#this is the main file that pulls in all other modules
# toggle = require("./toggle")




## LISTENERS FOR USER INTERACTION WITH PAGE
$(document).ready ->
  $toggle = $(".toggle-more")
  $moreInfo = $("#more-info")
  $moreInfo.hide()
  $toggle.on "click", ->
    $moreInfo.fadeToggle('fast')