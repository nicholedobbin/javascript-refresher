/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the arraysLoops.html page. 
    
    The function in this example is called swapNumbers().
    It prompts a user to input a number three times, using a 'for' loop, and stores the inputted numbers in an array. 
    It then uses another 'for' loop to iterate through the array backwards, storing each digit in reverse order 
    in a new array, and outputs the new array (i.e. the reversed inputted numbers) to the <h5 id="arrayExample"> 
    and the <h5 id="loopsExample"> elements in the arraysLoops.html file.

-----------------------------------------------------------------------------------------------------------------------*/

// Declare variables
let arrayExample = document.getElementById("arrayExample"); 
let loopsExample = document.getElementById("loopsExample");

// Function to swap an array of inputted numbers. 
function swapNumbers(){
    // Declare variables
    let numberList = [];
    let newList = [];
    let swapped = ""; 

    // This 'for' loop prompts the user to enter a number 3 times and
    // pushes each number into the 'numberList' array with numberList.push().
    for( let i = 0; i < 3; i++) {
        numberList.push(Number(prompt(`Enter a number:`)));  
    }

    // This 'for' loop iterates backwards through NumberList and puts the value
    // of each numberList array item into the newList array.
    for (let j = numberList.length; j >=0; j--) {
        swapped = numberList[j];
        newList.push(swapped);
    }

    // This adds the output to the <h5 id=arrayExample> tag in the html file.
    arrayExample.innerHTML = (
        `You entered the numbers: [ ${numberList.toString()} ].`
    );

    // This adds the output to the <h5 id=forLoopExample> tag in the html file.
    loopsExample.innerHTML = (
        `The swapped number is: [${newList.toString()} ].`
    );
}

