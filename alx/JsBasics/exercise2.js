// Exercise 2: Calculate Year of Birth

/*
Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born. This exercise demonstrates how to interact with users and process simple data.

Steps:
Prompt for Name and Age:

Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
Use prompt() again to ask for the user's age. Store this in a variable named userAge.
Calculate Year of Birth:

Determine the current year using new Date().getFullYear().
Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.
Display the Result:

Use alert() to show a message to the user that includes their name and the calculated year of birth.
*/

let userName = prompt('Enter your name: ');
let userAge = prompt('Enter your age: ');

let currentYear =  new Date().getFullYear();
console.log(currentYear);
console.log(Date());


let yearOfBirth = currentYear - userAge;

alert("Your name is " + userName + " and your age is " + userAge + "\n Year of Birth: " + yearOfBirth);