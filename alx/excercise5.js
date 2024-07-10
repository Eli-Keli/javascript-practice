// Exercise 5: Basic Function Creation

// Write a function that takes two numbers as parameters and returns their sum.

/*
Steps:
1. Declare a function named `sum` that takes two parameters, `num1` and `num2`.
2. Inside the function, return the sum of `num1` and `num2`.
3. After the function declaration, call the function with two numbers as arguments and store the result in a variable.
4. Use `console.log()` to print the result to the console.
*/

function sum(num1, num2) {
    return num1 + num2;
}

const result = sum(5, 3);
console.log(result);