imgArray = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg', 'hero4.jpg'];


// Add nav buttons for carousel
for (var i = 0; i < imgArray.length; i++) {
	$('.hero .carousel-nav ul').append('<li class="buttons"></li>');
	$('.hero .carousel-nav ul li:first-child').addClass('active');
}

$buttons = $('.carousel-nav li');

// When nav button is clicked:
	// Add 'active' class to button and remove from all siblings
	// Change CSS 'background-image' to corresponding img in array
	// Add 'active' class to corresponding hero section and remove from all siblings
$buttons.click(function() {
	$(this)
		.addClass('active')
		.siblings().removeClass('active');
	var btnIndex = $(this).index();
	$('section.hero')
		.css('background-image', 'url(img/' + imgArray[btnIndex]);
	$('section.hero .wrapper ul li')
		.eq(btnIndex).addClass('active-hero')
		.siblings().removeClass('active-hero');
})