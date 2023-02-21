/*----------------------------------------------- IFS L4T15 - Back to JS -----------------------------------------------
    
    This is the JavaScript file for the events.html page.
    
    This example is a program that stores information about a user's favourite books, and allows the user to 
    add a new book to the list. The HTML event 'onclick' is defined in the button element and calls the addBook() 
    JavaScript function. An event listener is also added to the button element, which calls the addToFavourites() 
    function that appends the newly added book to the Favourites list in the HTML file.

-----------------------------------------------------------------------------------------------------------------------*/

// Declare variables.
let bookArray = []; 
let favouritesList = document.getElementById("favouritesList"); 
let addBookButton = document.getElementById("addBookBtn");

// Add event listener to addBookButton that calls addToFavourites function.
addBookButton.addEventListener("click", addToFavourites); 

// Constructor function for book objects.
function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
}

// Function to add book object to storage and bookArray.
function addBook() {
    // Creates sessionStorage items "books" and "load".
    if (sessionStorage.getItem("load") === null) {  
        sessionStorage.setItem("load", true);
        sessionStorage.setItem("books", JSON.stringify(bookArray)); 
    }

    // Gets array of objects from sessionStorage's "books" item.
    bookArray = JSON.parse(sessionStorage.getItem("books")); 
    
    // Sets var newBook to Book object's values (from Book constructor function).
    let newBook = new Book( 
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("genre").value,
        document.getElementById("rating").value,
    );

    // Pushes newBook to bookArray.
    bookArray.push(newBook); 

    // Updates sessionStorage's "books" item.
    sessionStorage.setItem("books", JSON.stringify(bookArray));  

    // Resets form fields.
    const myForm = document.getElementById('myForm'); 
    myForm.reset(); 
};

// Function to add new books to favourites list.
function addToFavourites() {
    // Clears favouritesList <ul>'s innerHTML.
    favouritesList.innerHTML = null;  
    
    // Creates <li> elements containing text content of bookArray[i]'s object values.
    for (i = 0; i < bookArray.length; i++) { 
        let favouritesItem = document.createElement("li"); 
        // Sets <li> id to 'i' (to let the id index value increment).
        favouritesItem.id = i; 
        let bookTitle = bookArray[i].title; 
        let bookAuthor = bookArray[i].author; 
        let bookGenre = bookArray[i].genre;  
        let bookRating = bookArray[i].rating;  
        favouritesItem.textContent = 
        (
            `Title: ${bookTitle} | Author: ${bookAuthor} | Genre: ${bookGenre} | Rating: ${bookRating}/5`
        ); 
        
        // Appends <li>  elements to favouritesList <ul>.
        favouritesList.appendChild(favouritesItem); 
    };
}