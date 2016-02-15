
// Capture the click event on a link to ann image
var $overlay= $('<div id="overlay"></div>');
var $image = $("<img>");
$overlay.append($image);
$("body").append($overlay);
$("#imageGallery a").click(function(event){
	event.preventDefault();
var imageLocation = $(this).attr("href")
$image.attr("src",imageLocation);
$overlay.show();
});
	//show the overaly
	//update the overlay with the image linked in the link
	//get child's alt attribute and set caption

//add overlay
 	//an image
 	// a caption
// when overlay is clicked 
 	//hide the overaly