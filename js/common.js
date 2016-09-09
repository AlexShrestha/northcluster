// JavaScript Document

$(document).ready(function(){

	new WOW().init();
	
	$('#fullpage').fullpage({
		anchors: ['mainPage', 'secondPage', 'contacts'],
		menu: '#menu',
		scrollingSpeed: 1000,
		
		onLeave: function(index, nextIndex){
			if (nextIndex > 1) {
				$('.up').fadeIn(500);
			} else {
				$('.up').fadeOut(500);
			}
			
			if (nextIndex > 2) {
				$('.down').fadeOut(500);
			} else {
				$('.down').fadeIn(500);
			}
		}
		
	});
	
	$('.down').click(function() {
		$.fn.fullpage.moveSectionDown();
	});
	$('.up').click(function() {
		$.fn.fullpage.moveSectionUp();
	});
	
	

	
	$
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$("nav").toggleClass('active');
	});
	
	
	
	setInterval(startAnimation, 20000);
	startAnimation();
	
	setInterval(startAnimationTwo, 20000);
	startAnimationTwo();
});

function startAnimation() {
	var container = $("#container")
	
	container.shuffleLetters({
		"text": "design"
	});

	setTimeout(function(){
		container.shuffleLetters({
			"text": "develop"
		});
	},5000);

	setTimeout(function(){
		container.shuffleLetters({
			"text": "grow"
		});
	},10000);

	setTimeout(function(){
		container.shuffleLetters({
			"text": "ideate"
		});
	},15000);
}


function startAnimationTwo() {
	var container = $("#container2")
	
	container.shuffleLetters({
		"text": "designers"
	});

	setTimeout(function(){
		container.shuffleLetters({
			"text": "developers"
		});
	},5000);

	setTimeout(function(){
		container.shuffleLetters({
			"text": "marketeers"
		});
	},10000);
	
	setTimeout(function(){
		container.shuffleLetters({
			"text": "entrepreneurs"
		});
	},15000);
	
	
}


