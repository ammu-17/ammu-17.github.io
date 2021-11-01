
const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})
/**********************/
	/*	Client carousel   */
	/**********************/
	$('.carousel-client').bxSlider({
		auto: true,
	    slideWidth: 234,
	    minSlides: 2,
	    maxSlides: 5,
	    controls: false
	});

    
// BREAKPOINTS

var lg = 1280;
var md = 1024;
var sm = 768;
var xs = 680;
var xxs = 400;

var switch_background = function()
{
	var breakpoints = {lg:1280,md:1024,sm:768,xs:680,xxs:400}; 

	var size = 'fullsize';
	var width = $(window).width();
	
	if(width <= breakpoints.xxs) {
		size = 'medium';
	} else if (width <= breakpoints.sm) {
		size = 'mediumlarge';	
	}
	
	$(".wrapper").css('background-image', function () {
		var bg = ('url(' + $(this).data(size) + ')');
		return bg;
	});
}

$(window).resize(function(){
	switch_background();
});

if ($(window).width() <= xxs){  
	switch_background()
}

if ($(window).width() > xxs && $(window).width() <= sm){  
	switch_background()
}
document.getElementsByTagName("h1")[0].style.fontSize = "5em";


