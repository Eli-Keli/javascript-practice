//* Web Storage and JSON

//*Practice Exercises
/*
Exercise 1:

Create a simple web application that allows users to store their favorite quotes using local storage. Users should be able to add quotes, view a list of stored quotes, and remove quotes from local storage.

    Set up the HTML structure:

        - Create a container for the application.
        - Inside the container, include input fields for entering the quote and author, a button for adding the quote, and a section to display the stored quotes.
    
    Implement JavaScript functionality:

        - Define variables to reference the input fields, button, and section for displaying quotes.
        - Add an event listener to the button that triggers a function when clicked.
        - Implement the function for adding quotes
    
    Retrieve the input values for the quote and author.

        - Check if both the quote and author fields are filled out.
        - If both fields are filled, create a JavaScript object to represent the quote, including properties for the quote text and author.
        - Convert the JavaScript object to a JSON string using JSON.stringify().
        - Store the JSON string in local storage using localStorage.setItem() with a unique key.
    
    Implement the function for displaying stored quotes:

        - Retrieve all stored items from local storage using localStorage.getItem().
        - Parse each stored JSON string back into a JavaScript object using JSON.parse().
        - Iterate through the array of stored objects and display each quote in the designated section of the HTML.
        - Implement the function for removing quotes:
        - Add a button or link next to each displayed quote to allow users to remove it.
        - Add an event listener to the remove button/link that triggers a function when clicked.
        - Retrieve the unique key associated with the quote to be removed.
        - Use localStorage.removeItem() to remove the item from local storage.
        - Update the displayed list of quotes to reflect the removal.
    
    Test the application:

        - Enter a few quotes using the input fields and verify they are stored and displayed correctly.
        - Test the functionality to remove quotes and ensure they are removed from local storage and the displayed list.
    
    Add styling (optional):

        - Enhance the appearance of the application with CSS to improve user experience and visual appeal.
*/

//todo Define variables to reference the input fields, button, and section for displaying quotes.
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const addButton = document.getElementById("add-quote");
const quoteList = document.getElementById("quote-list");

//todo Add an event listener to the button that triggers a function when clicked
addButton.addEventListener("click", addQuote)

//todo Implement the function for adding quotes
function addQuote() {
    // Retrieve the input values for the quote and author.
    const quote = quoteInput.value.trim();
    const author = authorInput.value.trim();

    if (quote !== '' && author !== '') {
        const quoteObject = {
            quote: quote,
            author: author
        }
        const quoteString = JSON.stringify(quoteObject);
        localStorage.setItem(Date.now(), quoteString);
        displayQuote();
        quoteInput.value = '';
        authorInput.value = '';
    } else {
        alert("Please enter both quote and author")
    }
}

//todo Implement the function for displaying stored quotes
function displayQuote() {
    quoteList.innerHTML = '';
    const storedQuotes = Object.keys(localStorage);
    storedQuotes.forEach(key => {
        const quoteObject = JSON.parse(localStorage.getItem(key));
        const list = document.createElement('li');
        list.textContent = `${quoteObject.quote} : ${quoteObject.author}`;
        const removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", () => {
            localStorage.removeItem(key);
            displayQuote();
        })
        list.appendChild(removeButton);
        quoteList.appendChild(list);
    })
}

addButton.addEventListener("click", addQuote);
displayQuote()