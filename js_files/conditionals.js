/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the conditionals.html page. 
    
    The function in this example is called checkPalindrome().
    It prompts a user to input any word, then reverses the word and saves it to a new string, using a 
    'while' loop. It then compares the inputted string with the new string, using an 'if...else' conditional 
    statement, and outputs the result to the <p id="conditionalsExample"> element in the conditionals.html file.

-----------------------------------------------------------------------------------------------------------------------*/
// Declare variables.
let conditionalsExample = document.getElementById("conditionalsExample"); 

// Function to check if an inputted word is a palindrome.
function checkPalindrome(){
  // Declare variables.
  let newString = "";
  let userInput = prompt("Enter a word: ").toLowerCase(); 
  let i = userInput.length-1; 

  // The while loop reverses the order of the inputted string and converts it to a new string.
  while (i >= 0) {                          
    newString = newString + userInput[i];     
    i--;
  }

  // The 'if...else' conditional statement compares userInput and newString, 
  // and outputs whether or not it's a palindrome.
  if (newString === userInput) { 
    // This adds the output to the <p id=conditionalsExample> tag in the html file.
    conditionalsExample.innerHTML = (
      `${userInput} is a palindrome.`
    );
  } else {
    conditionalsExample.innerHTML = (
      `${userInput} is not a palindrome.`
    );
  }

}




