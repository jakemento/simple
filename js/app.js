$(document).ready(function() {
  $("button#blackTheme").click(function() {
    $("body").removeClass();
   $("body").addClass("black-background");
 });
 $("button#whiteTheme").click(function() {
   $("body").removeClass();
  $("body").addClass("white-background");
 });
  $("button#cat-btn").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#cat-btn-img").click(function() {
    $("div#cat-img").prepend('<img src="img/cat.jpg">');
    $("div#cat-img").children("img").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog-btn").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog-btn-img").click(function() {
    $("div#dog-img").prepend('<img src="img/dog.jpg">');
    $("div#dog-img").children("img").first().click(function() {
      $(this).remove();
    });
  });
});
