$("button").click(function () {
  var val = $(".submenu").css("display");

  if (val == "none") {
    $(".submenu").css("display", "block");
  } else if (val == "block") {
    $(".submenu").css("display", "none");
  }
});

// $("p").css("color", "blue");
