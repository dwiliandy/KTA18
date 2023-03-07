//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "07 jul 2023 00:00:01",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	