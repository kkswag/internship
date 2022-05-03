// $("button").click(function () {
//   var val = $(".menu").css("display");

//   if (val == "none") {
//     $(".menu").addClass("showMenu");
//   } else if (val == "block") {
//     $(".menu").removeClass("showMenu");
//   }
//   console.log("click");
// });

$(".hamberger button").click(function () {
  var val = $(".menu").css("display");

  $(".menu").toggleClass("showMenu");

  console.log("click");
});

$(".btn1").click(function () {
  $("#select").val("1");
});

$(".btn2").click(function () {
  $("#select").val("2");
});
