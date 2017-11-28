$(document).ready(function(){
   $(".dogs").click(function(){
    $("#barks").prepend("<li>BARK!</li>");
    $("#meows").prepend("<li>meow...</li>");
    $("ul#barks").children("li").first().click(function(e) {
      $(this).remove();
      e.stopPropagation();
    });
      $("ul#meows").children("li").first().click(function(e) {
      $(this).remove();
      e.stopPropagation();
    });
   });
   $(".cats").click(function(){
     $("#barks").prepend("<li>bark...</li>");
     $("#meows").prepend("<li>ROAR!</li>");
     $("ul#barks").children("li").first().click(function(e) {
       $(this).remove();
       e.stopPropagation();
     });
       $("ul#meows").children("li").first().click(function(e) {
       $(this).remove();
       e.stopPropagation();
     });
   });
 });
