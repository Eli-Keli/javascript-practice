// -------ES6+ FEATURES--------

/*
let and const:
    let allows for block-scoped variables, reducing the risk of variable hoisting and accidental reassignments, unlike var. const declares block-scoped variables with immutable values, providing better code clarity and preventing unintended modifications.
*/


/* Arrow Functions:
    Arrow functions provide a concise syntax for writing function expressions, with implicit return and lexical scoping of this. They are especially useful for short, one-liner functions and for maintaining the context of this.
*/

// Regular function
function add(a, b){
    return a + b; 
}
// Arrow function
const add = (a, b) => a + b;



/*
Template Literals:
    Template literals allow for more expressive string interpolation. Template literals use backticks (`) and ${} for easy interpolation. They enhance code readability and make string manipulation more convenient, by avoiding concatenation of strings.
*/
const object = "Person";
const orderId = 12345;
const greeting = `Hello ${object}, your order ID is ${orderId}.`;



/*
Destructuring:
    Destructuring simplifies the extraction of values from arrays and objects, assigning them to variables in a concise manner. It allows for more elegant and readable code when working with complex data structures.
*/

// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

// Object destructuring
const place = { country: 'USA', city: "New York" };
const { country, city } = place;
console.log(country, city); // Output: USA New York



/*
Spread and Rest Operators:
    Spread (…) operator allows for the expansion of iterable objects like arrays or strings into individual elements. Rest (…) operator collects multiple elements into an array or object, simplifying function parameter handling and array manipulation.
*/

// Spread operator example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest operator example
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15







/*
Exercise 1: Destructuring Object Properties and Logging

Given an object representing a person with properties like name, age, and profession, use destructuring to extract these values into separate variables and log them with the respective key value pair.

Steps:
 - Define an object named person with properties such as name, age, and profession.
 - Use destructuring assignment to extract the name, age, and profession properties
 - Log each extracted variable to the console using console.log() to display the values using Template Literals for printing.
*/

const person = {
    name: "Jacob",
    age: 27,
    profession: "Software Developer"
}

const { name, age, profession } = person;
console.log(name, age, profession)




/*
Exercise 2: Given an arrya nums = [1, 2, 3, 4, 5] add the number 6 to the array and remove the first number from the list. Then make sure to log the array to see it have the expected value of nums = [2, 3, 4, 5, 6]

Steps:
 - Define an array named nums with initial elements [1, 2, 3, 4, 5].
 - Add the number 6 to the end of the nums array using the push() method.
 - Remove the first number from the nums array using the shift() method.
 - Log the updated nums array to the console to verify that it has the expected value [2, 3, 4, 5, 6].
*/

const nums = [1, 2, 3, 4, 5]
nums.push(6);
nums.shift();
console.log(nums)




/*
Exercise 3: Write a function that accepts an array of numbers and returns a new array containing only the even numbers using a loop.

Steps:
 - Define a function named filterEvenNumbers that takes an array of numbers as a parameter.
 - Initialize an empty array named evenNumbers to store the even numbers.
 - Use a loop (for loop or forEach) to iterate through each number in the input array.
 - Inside the loop, check if the current number is even (i.e., divisible by 2 without a remainder). Hint use % operator to check if it is divisble
 - If the number is even, push it into the evenNumbers array.
 - After the loop, return the evenNumbers array containing only the even numbers.
*/

function filterEvenNumbers(...numbers) {
    const evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]%2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8));