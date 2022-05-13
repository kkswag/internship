// $(".menuBottom>button:last-child").click(function () {
//   var val = $(".menubottom").css("display");

//   $(".menubutton").toggleClass("dropdownLanguage");

//   console.log("a");
// });

// $(".menuBottom>button:last-child").click(function () {
//   var val = $(".menuBottom").css("display");

//   if (val == "none") {
//     $(".menuButton").addClass("dropdownLanguage");
//   } else if (val == "block") {
//     $(".menuButton").removeClass("dropdownLanguage");
//   }
//   console.log("a");
// });

$(".menuBottom>button:last-child").hover(function () {
  var val = $(".dropdownLanguage").css("display");

  $(".dropdownLanguage").toggleClass("showLanguage");

  console.log("a");
});
