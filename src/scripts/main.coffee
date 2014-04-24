#this is the main file that pulls in all other modules
# toggle = require("./toggle")




## LISTENERS FOR USER INTERACTION WITH PAGE
$(document).ready ->
  $('nav.mobile').hide()
  $('.toggle-mobile').on "click", ->
    console.log("you have clicked the menu")
    $('nav.mobile').toggle()