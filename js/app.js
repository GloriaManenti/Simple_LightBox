
// Capture the click event on a link to ann image
var $overlay= $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption=$("<p></p>")
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
$("#imageGallery a").click(function(event){
	event.preventDefault();
var imageLocation = $(this).attr("href");
var imageCaption= $(this).children("img").attr("alt");
$image.attr("src",imageLocation);
$caption.text(imageCaption);
$overlay.show();
});
	//show the overaly
	//update the overlay with the image linked in the link
	//get child's alt attribute and set caption

//add overlay
 	//an image
 	// a caption
// when overlay is clicked 
$overlay.click(function(){
$(this).hide();
})
 	//hide the overaly