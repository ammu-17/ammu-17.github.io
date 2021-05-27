$(function() {

    var inWrap = $('.inner-wrapper'),
    $slide = $('.slide');
  
  
    function slideNext() {
  
      inWrap.animate({left: '-200%'}, 200, function() {
    
        inWrap.css('left', '-100%');
    
        $('.slide').last().after($('.slide').first());
    
      });
    
    }
  
  
     //Enabling auto scroll
     sliderInterval = setInterval(slideNext, 4000);
  
  
  
    $('.prev').on('click', function() {
  
      inWrap.animate({left: '0%'}, 200, function() {
  
        inWrap.css('left', '-100%');
  
        $('.slide').first().before($('.slide').last());
  
      });
    });
  
  
    $('.next').on('click', function() {
  
      clearInterval(sliderInterval);
  
      slideNext();
  
    });
  
  
  });
  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Developing an E-commerce website is ₹30,000. ", "hosting is ₹199/mo. ", "Domain is ₹800."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });