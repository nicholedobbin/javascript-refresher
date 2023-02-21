/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the jquery.html page. 
    
    The program demonstrates jQuery concepts described in the jquery.html file, using jQuery 
    functions and chained effects, which:
        (a) Fades an image in and out when the respective buttons are clicked.
        (b) Uses a chained effect to animate a paragraph, allowing users to move the parapgraph and 
            change its background colours by pressing arrow keys.

-----------------------------------------------------------------------------------------------------------------------*/

// Recommended  document.ready jQuery syntax (for jQuery 3.0 and above):
$(function() {

    // Function for animating paragraph (using arrow keys to move and change colour of <p> element).
    $(document).on("keydown",(function(key) {
        console.log(key);
        switch (parseInt(key.which, 10)) {
            // When Left arrow key is pressed.
            case 37:
                $(".movingParagraph").css("background-color","#F88379").animate({ left: "-=20px" }, 'fast');
                break;
                // When Up arrow key is pressed.
            case 38:
                $(".movingParagraph").css("background-color","#96DED1").animate({  top: "-=20px" }, 'fast');
                break;
                // When Right arrow key is pressed.
            case 39:
                $(".movingParagraph").css("background-color","#EADDCA").animate({ left: "+=20px" }, 'fast');
                break;
                // When Down arrow key is pressed.
            case 40:
                $(".movingParagraph").css("background-color","#7393B3").animate({ top: "+=20px" }, 'fast');
                break;
        }
    }));

    // Fades out image slowly when fadeOutButton is clicked.
    $(".fadeOutButton").on("click", function(){
        $(".fadingImage").fadeOut("slow");
    });
        
    // Fades in image quickly when fadeInButton is clicked.
    $(".fadeInButton").on("click", function(){
        $(".fadingImage").fadeIn("fast");
    });
});


 
    