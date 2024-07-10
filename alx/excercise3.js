// Exercise 3: Conditional Logic Practice

//Write a script to check if a number is positive, negative, or zero and print an appropriate message to the console.

/*
Steps:
1. Declare a variable named `number` and initialize it with a value.
2. Use an `if` statement to check if the number is greater than 0. If true, print "[number] is positive" to the console.
3. Use an `else if` statement to check if the number is less than 0. If true, print "[number] is negative" to the console.
4. Use an `else` statement to handle the case where the number is 0. Print "[number] is zero" to the console.
*/

let number = 5;

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`${number} is zero`);
}
