$(document).ready(() => {
  $(".nav-menu").click(() => {
    $(".nav-close").show();
    $(".nav-menu").hide();
    $(".nav-bar").slideToggle("slow");
  });
  $(".nav-close").click(() => {
    $(".nav-close").hide();
    $(".nav-menu").show();
    $(".nav-bar").slideToggle("slow");
  });
});
