# **JavaScript Fundamentals Refresher**

## **IFS L4T15 - Back to JS**

## **Description**
This is an interactive website that forms a tutorial of JavaScript concepts and allows the user to practise their knowledge.
Each internal link/webpage has its own JavaScript file which handles the functionality for the practice sections of their related HTML file.

### **Try It Out on Netlify** 
Link: [https://javascript-refresher.netlify.app/](https://javascript-refresher.netlify.app/)

<hr>

## **Project/File Details**

### **HTML Files:**

#### **[index.html](/index.html)**
* This is the homepage, with links to sections and categories in the site.
* There are no JavaScript files associated with this file.

#### **[variables.html](/html_files/variables.html)**
* This is the Variables page. 
* It provides information about JavaScript variables, keywords and naming conventions and how they are used, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [variables.js](/js_files/variables.js).

#### **[conditionals.html](/html_files/conditionals.html)**
* This is the Conditional Statements page. 
* It provides information about JavaScript conditional statements like 'if..else' statements, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [conditionals.js](/js_files/conditionals.js).

#### **[arraysLoops.html](/html_files/arraysLoops.html)**
* This is the Arrays and Loops page. 
* It provides information about JavaScript arrays and loops (with focus on 'for' and 'while' loops), and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [arraysLoops.js](/js_files/arraysLoops.js).

#### **[maps.html](/html_files/maps.html)**
* This is the Maps page. 
* It provides information about JavaScript maps and how they are used, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [maps.js](/js_files/maps.js).

#### **[functions.html](/html_files/functions.html)**
* This is the Functions page. 
* It provides information about JavaScript functions, including user-defined and built-in functions, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [functions.js](/js_files/functions.js).

#### **[events.html](/html_files/events.html)**
* This is the Events page. 
* It provides information about JavaScript and HTML Events, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [events.js](/js_files/events.js).

#### **[jquery.html](/html_files/jquery.html)**
* This is the jQuery page. 
* It provides information about jQuery syntax, functions, selectors, events, effects and effect chaining, and includes examples and a practice section for users to interact with.
* The JavaScript file for this page is [jquery.js](/js_files/jquery.js).

<br>

### **JavaScript Files:** 

#### **[variables.js](/js_files/variables.js)**
* This is the JavaScript file for the [variables.html](/html_files/variables.html) page. 
* The function in this file is called getQuizAnswer() and is called in the variables.html page's Quiz section, to retrieve the radio button selection made by the user.
* It uses a 'for' loop to loops through the answer options and, if the correct answer is selected (i.e. the radio value = "correct" and is marked as 'checked'), it changes the colour to green and alerts the user that the answer is correct. Else, it changes the selected radio text to red and alerts the user 
that the answer is incorrect.

#### **[conditionals.js](/js_files/conditionals.js)**
* This is the JavaScript file for the [conditionals.html](/html_files/conditionals.html) page. 
* The function in this file is called checkPalindrome().
* It prompts a user to input any word, then reverses the word and saves it to a new string, using a 'while' loop. It then compares the inputted string with the new string, using an 'if...else' conditional statement, and outputs the result to the &lt;p id="conditionalsExample"&gt; element in the conditionals.html file.

#### **[arraysLoops.js](/js_files/arraysLoops.js)**
* This is the JavaScript file for the [arraysLoops.html](/html_files/arraysLoops.html) page.
* The function in this file is called swapNumbers().
* It prompts a user to input a number three times, using a 'for' loop, and stores the inputted numbers in an array. It then uses another 'for' loop to iterate through the array backwards, storing each digit in reverse order in a new array, and outputs the new array (i.e. the reversed inputted numbers) to the &lt;h5 id="arrayExample"&gt; and the &lt;h5 id="loopsExample"&gt; elements in the arraysLoops.html file

#### **[maps.js](/js_files/maps.js)**
* This is the JavaScript file for the [maps.html](/html_files/maps.html) page. 
* The function in this file is called getQuizAnswer() and is called in the maps.html page's Quiz section to retrieve the radio button selection made by the user.
* t uses a 'for' loop to loops through the answer options and, if the correct answer is selected (i.e. the radio value = "correct" and is marked as 'checked'), it changes the colour to green and alerts the user that the answer is correct. Else, it changes the selected radio text to red and alerts the user that the answer is incorrect.

#### **[functions.js](/js_files/functions.js)**
* This is the JavaScript file for the [functions.html](/html_files/functions.html) page. 
* The function in this file is called calculateTotal().
* It uses a 'for' loop to prompt a user to input any number 5 times. Each time the user enters a number, it is stored in an array. The  function then calculates the sum (total) of the inputted numbers by using a 'while' loop and adds the output to the &lt;p id="functionExample"&gt; element in the functions.html file.

#### **[events.js](/js_files/events.js)**
* This is the JavaScript file for the [events.html](/html_files/events.html) page. 
* The program stores information about a user's favourite books, and allows the user to add a new book to the list.
* The HTML event 'onclick' is defined in the button element in the html file and calls the addBook() JavaScript function. An event listener is also added to the button element, which calls the addToFavourites() function that appends the newly added book to the Favourites list in the HTML file.

#### **[jquery.js](/js_files/jquery.js)**
* This is the JavaScript file for the [jquery.html](/html_files/jquery.html) page.  
* The program demonstrates jQuery concepts described in the jquery.html file, using jQuery functions and chained effects, which:
    * Fades an image in and out when the respective buttons are clicked.
    * Uses a chained effect to animate a paragraph, allowing users to move the parapgraph and change its background colours by pressing arrow keys.


### **Stylesheet:** 

#### **[style.css](/style.css)**
* This is the stylesheet for my "Back To JS" website, compiled with the SCSS [style.scss](/style.scss) file.
* It contains the styling for all the pages on this site.

<hr>

## **Installation and Setup**
1. Clone the repo and open with your preferred IDE (e.g. [VSCode](https://code.visualstudio.com/docs/setup/setup-overview)).
2. Run the program in the IDE's live server (e.g. in VSCode, you can click the 'Go Live' button). This should open the program in your browser automatically.

<hr>

## **How To Use**
1. Click on any of the tabs in the navbar to learn about different JavaScript concents. 
2. In each page, you can read through the refresher notes and practice the concept in the "Practice what you've learned!" section at the bottom of the page.

<hr>

## **References** 
All references used in this task, including self-references from previous tasks that I've completed, have been linked to their source pages or referenced in the website (e.g. image sources, quotes or citations).

## **Credit and References**
Made by [Nichole Dobbin](https://github.com/nicholedobbin), for my [HyperionDev](https://www.hyperiondev.com/) course.