// Task 1: DOM Manipulation Task
/*
Objective:
Select a paragraph element by its ID and change its text content to “Hello, DOM!”.

Steps:
Ensure your HTML has a paragraph (<p>) element with a unique ID. html <p id="greeting">Original Text</p>
In your JavaScript, use document.getElementById() to select the paragraph element.
Use the .textContent property to change the text of the paragraph to “Hello, DOM!”.
*/

const para = document.getElementById("greeting");
console.log(para)

para.textContent = "Hello, DOM!";


// Task 2: Event Handling Task
/*
Objective:
Add an event listener to a button that changes the button’s text to “Clicked!” when it is clicked.

Steps:
Ensure your HTML has a button element, optionally with an ID for easy selection. html <button id="clickButton">Click Me</button>
In your JavaScript, select the button element using document.getElementById() or document.querySelector().
Use .addEventListener() to attach a click event listener to the button.
Inside the event listener’s callback function, change the button’s text to “Clicked!”.
*/

const button = document.getElementById("click");

button.addEventListener("click", () => {
    button.innerText = "Clicked"
    console.log(button.innerText)
})

// Task 3: Hover Effect Task
/*
Objective:
Create a hover effect on list items that changes their background color when hovered over.

Steps:
Ensure your HTML has a list of items (<ul> or <ol>) with <li> elements. html <ul> <li class="hover-item">Item 1</li> <li class="hover-item">Item 2</li> <li class="hover-item">Item 3</li> </ul>
In your JavaScript, select all list items using document.querySelectorAll().
Loop through each item and use .addEventListener() to attach mouseover and mouseout events.
Inside the mouseover event’s callback function, change the item’s background color.
Inside the mouseout event’s callback function, reset the item’s background color.
*/

const lists = document.querySelectorAll(".list-item");
console.log(lists);

lists.forEach((list) => {
    list.addEventListener('mouseover', () => {
        list.style.backgroundColor = 'lightblue'
    });

    list.addEventListener('mouseout', () => {
        list.style.backgroundColor = ''
    })
})
