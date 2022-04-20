// $("button").click(function () {
//   var val = $(".menu").css("display");

//   if (val == "none") {
//     $(".menu").addClass("showMenu");
//   } else if (val == "block") {
//     $(".menu").removeClass("showMenu");
//   }
//   console.log("click");
// });

$("button").click(function () {
  var val = $(".menu").css("display");

  $(".menu").toggleClass("showMenu");

  console.log("click");
});
