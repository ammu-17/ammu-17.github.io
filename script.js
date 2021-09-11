$(document).ready(function () {
  $(document).on("scroll", onScroll);
  //smoothscroll
  $('.navbar-nav li a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('.navbar-nav li a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
      var target = this.hash
          , menu = target;
      target = $(target);
      $('html, body').stop().animate({
          'scrollTop': target.offset().top + 2
      }, 1000, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});



function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav li a').removeClass("active");
          currLink.addClass("active");
      }
      else {
          currLink.removeClass("active");
      }
  });
}

/*$(".btn").click(function() {
$(".myText").toggle();  
});*/

// OR

$(".btn2").click(function() {

var lable = $(".btn2").text().trim();

if(lable == "\u2716") {
$(".btn2").text("\u2714");
$(".myText").hide();
}
else {
$(".btn2").text("\u2716");
$(".myText").show();
}

});
/*var scrollp=0;
    (function ($) {
        $(document).ready(function(){
            $(function () {
                $(window).scroll(function () {
                // ask about the position of scroll 

                    if ($(this).scrollTop() < scrollp) {
                        $('.navbar').fadeIn();
                        scrollp= $(this).scrollTop();
                    } else {
                        $('.navbar').fadeOut();
                        scrollp= $(this).scrollTop();
                    }
                });
            });

        });
    }(jQuery));*/
    