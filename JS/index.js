var images=[
"images/citipix_skyline.jpg",
"images/austin.jpg",
"images/la.jpg",
"images/nyc.jpg",
"images/sf.jpg",
"images/sydney.jpg"];

$( document ).ready(function() {

	function changeImage(input){

		input = input.toLowerCase();
		input = input.replace(/\s+/g, '');

		if (input === "newyork" || input === "newyorkcity" || input === "nyc") {
			$("body").css("background-image","url(images/nyc.jpg)");
		}
		else if (input === "sanfrancisco" || input === "sf" || input === "bayarea") {
			$("body").css("background-image","url(images/sf.jpg)");
		}
		else if (input === "losangeles" || input === "la" || input === "lax") {
			$("body").css("background-image","url(images/la.jpg)");
		}
		else if (input === "austin" || input === "atx") {
			$("body").css("background-image","url(images/austin.jpg)");
		}
		else if (input === "sydney" || input === "syd") {
			$("body").css("background-image","url(images/sydney.jpg)");
		}
		else {
			alert("Please write a city");
		}

		$("#city-type").val("");
		
	}


	$("form").on("submit", 
		function(event){ 
			event.preventDefault();
			changeImage( $('#city-type').val() );	
		}
	);


	$("#submit-btn").on("click",
		function(event){ 
			changeImage( $('#city-type').val() );
		}
	);




});








/*Read input text {

}

Analyse the text (input){
	if input = "New York" or "New York City" or "NYC" then show img "nyc.jpg"
	else if input = "San Francisco" or "SF" or "Bay Area" then show img "sf.jpg"
	else if input = "Los Angeles" or "LA" or "LAX" then show img "la.jpg"
	else if input = "Austin" or "ATX" then show img "austin.jpg"
	else if input = "Sydney" or "SYD" then show img "sydney.jpg"
	else alert
}*/







