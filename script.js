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

/*$(".btn").click(function() {
  $(".myText").toggle();  
});*/

// OR

$(".btn9").click(function() {
  
  var lable = $(".btn9").text().trim();

  if(lable == "creators") {
    $(".btn9").text("creators");
    $(".myText").hide();
  }
  else {
    $(".btn9").text("creators");
    $(".myText").hide();
  }
   
 });
 $(".btn10").click(function() {
  
  var lable = $(".btn10").text().trim();

  if(lable == "All") {
    $(".btn10").text("All");
    $(".myText").show();
  }
  else {
    $(".btn10").text("All");
    $(".myText").show();
  }
   
 });





filterSelection("nature") // Execute the function and show all columns
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("column");
if (c == "all") c = "";
// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}

function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);     
  }
}
element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}



