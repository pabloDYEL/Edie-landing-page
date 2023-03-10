$(function() {
  $(".menu-link").click(function(e) {
    e.preventDefault();
    $(".menu-link").toggleClass("open");
    $(".burger").toggleClass("open");
    $(".burger-open").toggleClass("open");
    $(".menu-overlay").toggleClass("open");
  });
});

$(function() {
  $(".uno").hover(function(e) {
    e.preventDefault();
    $(".uno").toggleClass("open");
    $(".button-uno").toggleClass("open");
  });
});

$(function() {
  $(".dos").hover(function(e) {
    e.preventDefault();
    $(".dos").toggleClass("open");
    $(".button-dos").toggleClass("open");
  });
});

$(function() {
  $(".tres").hover(function(e) {
    e.preventDefault();
    $(".tres").toggleClass("open");
    $(".button-tres").toggleClass("open");
  });
});

$(function(){
  $(".third-header").click(function(e){
    e.preventDefault();
    $(".under").toggleClass("open");
    $(".third-header").toggleClass("open");
  });
});