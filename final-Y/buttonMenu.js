var aaa = $(".menu").css("display");


$("button").click(function () {
  var val = $(".submenu").css("display");

  if (val == "none") {
    $(".submenu").css("display", "block");
  } else if (val == "block") {

      $(".submenu").css("display", "none");

  }
});

if(aaa == 'none'){
  console.log('sss');
  $(".submenu").css("display", "block!important");
}


