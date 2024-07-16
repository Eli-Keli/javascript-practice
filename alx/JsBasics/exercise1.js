// Exercise 1: Working with Variables and Data Types

/*
Create a script that declares and initializes variables of different data types. Then, use console.log to print each variable's value and type. This exercise will help you understand how to work with various data types in JavaScript.

Steps:
Declare and Initialize Variables:

Declare a variable named name and initialize it with your name as a string.
Declare a variable named age and initialize it with your age as a number.
Declare a variable named isStudent and initialize it with a boolean value (true or false) that indicates whether you are a student.
Declare a variable named address and initialize it as an object that includes your city and country.
Declare a variable named hobbies and initialize it with an array of your hobbies.
Declare a variable named undefinedVariable but do not initialize it, leaving it undefined.
Declare a variable named nullVariable and explicitly set it to null.
Print Variables and Their Types:

Use console.log to print each variable's value and its type. To print the type, use the typeof operator.
*/


let name = 'Eli Keli';
let age = 18;
let isStudent = true;
let address = {
    city: "Nairobi",
    country: "Kenya"
};
let hobbies = ['Coding', 'Reading', 'Watching movies', 'Watching football'];
let undefinedVariable;
let nullVariable = null;


console.log(name, typeof(name));
console.log(age, typeof(age));
console.log(isStudent, typeof(isStudent));
console.log(address, typeof(address));
console.log(hobbies, typeof(hobbies));
console.log(undefinedVariable, typeof(undefinedVariable));
console.log(nullVariable, typeof(nullVariable));

