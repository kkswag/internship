// $(".menuBottom>button:last-child").click(function () {
//   var val = $(".menubottom").css("display");

//   $(".menubutton").toggleClass("showLanguage");

//   console.log("a");
// });

// $(".menuBottom>button:last-child").click(function () {
//   var val = $(".menuBottom").css("display");

//   if (val == "none") {
//     $(".menuButton").addClass("showLanguage");
//   } else if (val == "block") {
//     $(".menuButton").removeClass("showLanguage");
//   }
//   console.log("a");
// });

$(".menuBottom>button:last-child").hover(function () {
  var val = $(".dropdownLanguage").css("display");

  $(".dropdownLanguage").toggleClass("showLanguage");

  console.log("a");
});

$(".calculate>img").click(function () {
  var val = $(".calContent").css("display");

  if (val == "none") {
    $(".calContent").addClass("showCalculate");
  } else if (val == "flex") {
    $(".calContent").removeClass("showCalculate");
  }
  console.log("add");
});

$(".close").click(function () {
  var val = $(".calContent").css("display");

  if (val == "flex") {
    $(".calContent").removeClass("showCalculate");
  }
  console.log("add");
});
