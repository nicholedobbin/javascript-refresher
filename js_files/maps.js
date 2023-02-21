/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the maps.html page. 
    
    The function in this example is called getQuizAnswer() and is called in the maps.html page's Quiz section,
    to retrieve the radio button selection made by the user.
    
    It uses a 'for' loop to loops through the answer options and, if the correct answer is selected 
    (i.e. the radio value = "correct" and is marked as 'checked'), it changes the colour to green and alerts 
    the user that the answer is correct. Else, it changes the selected radio text to red and alerts the user 
    that the answer is incorrect.

-----------------------------------------------------------------------------------------------------------------------*/

// Declare variables
const submitButton = document.getElementById("submitButton");
const incorrectAnswerMessage = "Oops! That's incorrect. Try again.";
const correctAnswerMessage = "Well done! That's correct!";

// Function to get user's quiz answer selection and determine if the answer is correct.
function getQuizAnswer(userSelection) {
    const answers = document.querySelectorAll(`input[name=${userSelection}]`);
    
    for (let i = 0; i < answers.length; i++) {
        // If the correct answer is selected (i.e. the radio value = "correct" and is marked as 'checked'), 
        // change the colour to green and alert that the answer is correct.
        if (answers[i].value === "correct") {
            if (answers[i].checked) {
                answers[i].nextSibling.nextSibling.style.color = "green";
                alert(correctAnswerMessage);
            }
            // Else, change the selected radio text to red and alert that the answer is incorrect.
            else {
                answers[i].nextSibling.nextSibling.style.color = "red";
                alert(incorrectAnswerMessage);
            }
        }
        else {
            answers[i].nextSibling.nextSibling.style.color = "red";  
        }
    }
}

