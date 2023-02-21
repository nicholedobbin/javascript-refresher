/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the functions.html page. 
    
    The function in this example is called calculateTotal(). 
    It uses a 'for' loop to prompt a user to input any number 5 times. Each time the user enters a number, 
    it is stored in an array. The  function then calculates the sum (total) of the inputted numbers by 
    using a 'while' loop and adds the output to the <p id="functionExample"> element in the functions.html file.

-----------------------------------------------------------------------------------------------------------------------*/

// Declare variables
let numberList = [];
let j = 0;
let sumOfList = 0;
let initialValue = 0;
let functionExample = document.getElementById("functionExample"); 

// Function to calculate sum of inputted numbers. 
function calculateTotal(){
    // The 'for' loop prompts the user to enter any number 5 times and
    // pushes each number into the 'numberList' array with numberList.push().
    for( let i = 0; i < 5; i++) {
        numberList.push(Number(prompt(`Enter a number:`)));  
    }

    // The 'while' loop that calculates the sum (total) of each element in numberList.
    while (j < numberList.length) {
        sumOfList += numberList[j];
        j++;
    }

    // This adds the output to the <p id=functionExample> tag in the html file.
    functionExample.innerHTML = (
        `You entered the numbers: [ ${numberList.toString()} ]. The total of all the numbers in this list is: ${sumOfList}`
    );
}
