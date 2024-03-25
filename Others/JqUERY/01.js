console.log($);
console.log("Hi I am using jQuery");

$(document).ready(function () {
  $("h1").click(function () {
    //     $("h1").hide();
    $("h1").dblclick(function () {
      //  $("h1").show();
      //       $("h1").toggle();
    });
    $("#click").click(function () {
      $("h1").toggle();
    });
  });
});
