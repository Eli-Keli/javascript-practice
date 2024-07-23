//* Practice Exercises
// In this exercise, you need to implement the script.js file for the html code below to function as follows. It should add a new list item to the unordered list with the id list-container.

//Todo Step-by-step Instructions:
/*
- Add an event listener to the “Add” button to trigger the addItem() function when clicked.
- In the addItem() function:
 - Get the input value using the id input-text 
 - If the input value is not empty:
  - Create a new list item.
  - Set the text of the list item to the input value.
  - Append the new list item to the list container.
  - Clear the input field.
*/

document.getElementById("add-button").addEventListener("click", addItem);

function addItem() {
    let input = document.getElementById("input-text").value.trim();
    if (input !== "") {
        let list = document.createElement("li");
        list.textContent = input
        document.getElementById("list-container").appendChild(list)
        document.getElementById("input-text").value = ""
    }
}