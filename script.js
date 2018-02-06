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
		dots[i].className = dots[i].className.replace("active","");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += "active";
}



//jq

$(document).ready(function(){
    $(".card").hover(function() {
	    	$(this).find("h4").toggleClass("work-active anime-white");
		    $(this).find("p").toggleClass("work-active-sub anime-white");
		    $(this).find(".blue-line").toggleClass(" blue-line-hover");
		    $(this).find(".blue-line").addClass("anime-white");
		    $(this).find("h4").addClass("anime-white");
		    $(this).find("p").addClass(" anime-white");
	 });
});
