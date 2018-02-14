
// header start
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 70) {
      $("navbar").addClass("test");
      $("li").addClass("test");
    } else {
      $("navbar").removeClass("test");
      $("li").removeClass("test");
    }
  });
});
// header end

// card start
$(document).ready(function(){
     $(".card").hover(function(){
        $(this).css("box-shadow", "0 15px 17px 0 rgba(0,0,0,0.50)");
        }, function(){
        $(this).css("box-shadow", "none");
    });
});
// card end
