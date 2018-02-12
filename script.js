	var slideIndex = 1;
	showSlides(slideIndex);
	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");

		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i<slides.length; i++){
			slides[i].style.display = "none";
		}

		for (i = 0; i<dots.length; i++) {
			dots[i].className = dots[i].className.replace("active"," ");
		}
		
		slides[slideIndex-1].style.display = " flex";
		dots[slideIndex-1].className += " active";
	}



//jq

$(document).ready(function(){
	//yark
	$("#menu").on("click","a", function (event) {
	        		event.preventDefault();
	       			var id  = $(this).attr('href'),
	            	top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 500);
	    });

	//show-all-button
	var $hiding = $('.hiding'),
         $buttonCenter = $('.buttonCenter');
     $('.buttonCenter').click(function () {
         $hiding.finish();
         var vis = $('.hiding').is(":visible"), //show all or hide on button
             text = vis ? 'SHOW MORE' : 'HIDE SOME';
         $buttonCenter.text(text);
         $hiding.slideToggle("slow");
         return false;
     });

	//hovers on works
    $(".card").hover(function() {
	    	$(this).find("h4").toggleClass("work-active anime-white");
		    $(this).find("p").toggleClass("work-active-sub anime-white");
		    $(this).find(".blue-line").toggleClass(" blue-line-hover");
		    $(this).find(".blue-line").addClass("anime-white");
		    $(this).find("h4").addClass("anime-white");
		    $(this).find("p").addClass(" anime-white");		    
	 });

	$(".move-block").swipe( {
	        swipeLeft:leftSwipe,
	        swipeRight:rightSwipe,
	        threshold:0
	});
	function leftSwipe(event){
	        alert('swipe left');
	}
	function rightSwipe(event){
	        alert('swipe right');
	}

});




//mouse-gradient-script by Lea Verou:

// var root = document.getElementsByTagName("works-list li");

// document.addEventListener("mousemove", evt => {
// 	let x = evt.clientX / innerWidth;
// 	let y = evt.clientY / innerHeight;

// 	root.style.background-image = ("--mouse-x", x);
// 	root.style.background-image = ("--mouse-y", y);
// });



// var originalBG = $(".works-list li").css("background-color");

// $('.works-list li:not(".active")')
// .mousemove(function(e) {

//     x  = e.pageX - this.offsetLeft;
//     y  = e.pageY - this.offsetTop;
//     xy = x + " " + y;
	   
//     bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
//     bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

//     $(this)
//       .css({ background: bgWebKit })
//       .css({ background: bgMoz });
		
// }).mouseleave(function() {
// 	$(this).css({ background: originalBG });
// });



// $(document).ready(function(){
//     $(".card").hover(function() {
// 	    	$(this).find("h4").toggleClass("work-active anime-white");
// 		    $(this).find("p").toggleClass("work-active-sub anime-white");
// 		    $(this).find(".blue-line").toggleClass(" blue-line-hover");
// 		    $(this).find(".blue-line").addClass("anime-white");
// 		    $(this).find("h4").addClass("anime-white");
// 		    $(this).find("p").addClass(" anime-white");
// 		    var x, y;
// 		    $(this).mousemove(function (e){
// 		    	x = e.pageX;
// 		    	y = e.pageY;
// 		    	xy = x + " " + y;

// 		    	var bgAll = "radial-gradient(" + x + "px " + y + "px 45deg, circle, " + " rgb(26,33,46) " + " 0%, " + " rgb(7,15,28) " + " " + " 100%);";
// 		    	var bgMs = "-ms-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + " rgb(26,33,46) " + " 0%, " + " rgb(7,15,28) " + " " + " 100%);";
// 		    	var bgWebKit = "-webkit-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + " rgb(26,33,46) " + " 0%, " + " rgb(7,15,28) " + " " + " 100%);";
// 				var bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + " rgb(26,33,46) " + " 0%, " + " rgb(7,15,28) " + " " + " 100%);";

// 		    }
// 		    );
// 	 });
// });





		  //   var originalBGplaypen = $(".card").css("background-color"),
			 //    x, y, xy, bgWebKit, bgMoz, 
			 //    lightColor = "rgba(255,255,255,0.75)",
			 //    gradientSize = 100;
					
				// // Basic Demo
				// $('.card').mousemove(function(e) {
				
				// 	x  = e.pageX - this.offsetLeft;
				// 	y  = e.pageY - this.offsetTop;
				// 	xy = x + " " + y;
					   
				// 	bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
				// 	bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";
										
				// 	$(this)
				// 		.css({ background: bgWebKit })
				// 		.css({ background: bgMoz });
					
				// }).mouseleave(function() {			
				// 	$(this).css({ background: originalBGplaypen });
				// });
