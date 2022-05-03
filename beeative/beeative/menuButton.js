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

// $(".btn1").click(function () {
//   $("#select").val("1");
// });

// $(".btn2").click(function () {
//   $("#select").val("2");
// });

$("button").click(function () {
  if ($(this).hasClass("btn1")) {
    $("#select").val("1");
  } else if ($(this).hasClass("btn2")) {
    $("#select").val("2");
  }
});
