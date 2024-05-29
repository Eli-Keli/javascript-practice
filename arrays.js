/* Practice Exercise:
Create an array named **`colors`** containing the names of different colors.
Access the third element of the **`colors`** array and log it to the console.
Determine and log the length of the **`colors`** array.
*/

console.log('\nINTRO')

let colors = ['red', 'blue', 'green', 'yellow'];
console.log(colors[2]);
console.log(colors.length);


/* 
Create an array named **`fruits`** containing three different fruits.
Add a new fruit to the end of the **`fruits`** array using the **`push()`** method.
Remove the first fruit from the **`fruits`** array using the **`shift()`** method.
Modify the second fruit in the **`fruits`** array to 'kiwi'.
Create a new array named **`moreFruits`** with additional fruits and concatenate it with the **`fruits`** array.
Slice the combined array to create a new array containing only the fruits from the second to the fourth position.
*/

console.log('\nARRAY OPERATIONS\n');

let fruits = ['apple', 'banana', 'mango'];
console.log(fruits);

fruits.push('lemon');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits[1] = 'kiwi';
console.log(fruits);

let moreFruits = ['Pineapple', 'grapes', 'orange']
console.log(moreFruits);

let combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);

let slicedArray = combinedFruits.slice(1, 4);
console.log(slicedArray);


/* 
- Create an array named **`numbers`** containing a sequence of numbers from 1 to 10.
- Use a **`for`** loop to print each number in the **`numbers`** array.
- Use the **`forEach()`** method to print each number in the **`numbers`** array.
- Use the **`map()`** method to create a new array containing the squares of each number in the **`numbers`** array.
- Use the **`filter()`** method to create a new array containing only the even numbers from the **`numbers`** array.
- Use the **`reduce()`** method to calculate the sum of all numbers in the **`numbers`** array.
*/

console.log('\nITERATING THROUGH ARRAYS\n');

let numbers = [3, 6, 2, 7, 8];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach((number) => console.log(number));

let squaredNumbers = numbers.map((number) => number*number);
let evenNumbers = numbers.filter((number) => number%2 === 0);
let sumOfNumbers = numbers.reduce((number, sum) => number + sum)
console.log(squaredNumbers);
console.log(evenNumbers);
console.log(sumOfNumbers);

/*
- Create an array named **`scores`** containing several numerical values.
- Use the **`indexOf()`** method to find the index of a specific score in the **`scores`** array.
- Use the **`lastIndexOf()`** method to find the index of the last occurrence of a specific score in the **`scores`** array.
- Use the **`includes()`** method to check if a certain score exists in the **`scores`** array.
- Create an array named **`names`** containing several strings representing names.
- Use the **`sort()`** method to sort the **`names`** array alphabetically.
- Create an array named **`randomNumbers`** containing random numerical values.
- Use the **`sort()`** method with a compare function to sort the **`randomNumbers`** array in descending order.
*/

console.log('\nSEARCHING AND SORTING ARRAYS\n');

let scores = [45, 28, 34, 28, 67];
console.log(scores.indexOf(28));
console.log(scores.lastIndexOf(28));
console.log(scores.includes(34));

let names = ['Brian', 'Bob', 'Charles', 'Merlin', 'Daisy', 'Linet'];
console.log(names.sort());

let randomNumbers = [6, 8, 13, 5, 22, 56];
console.log(randomNumbers.sort((a, b) => a - b)); // ascending order
console.log(randomNumbers.sort((a, b) => b - a)); // descending order


/*
- Create a 2D array named **`table`** representing a multiplication table from 1 to 5.
- Access and log the element representing the product of 3 * 4 from the **`table`** array.
- Iterate over the **`table`** array and print each row on a new line.
 */

console.log('\nMULTIDIMENTIONAL ARRAYS\n');

let table = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25],
]

for (let i = 0; i < table.length; i++) {
    let row = [];
    for (let j = 0; j < table[i].length; j++) {
        row.push(table[i][j]);
    }
    console.log(row);
}

/*
### Exercise 1: Reverse an Array

- Write a function **`reverseArray(arr)`** that takes an array as input and returns a new array with the elements reversed.
- Do not use the built-in **`reverse()`** method.
*/

console.log('\nExercise 1: Reverse an Array\n')

function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

let myArr = [16, 24, 13, 7, 22, 31];
console.log(`My Array: ${myArr}`);
console.log(`Reversed Array: ${reverseArray(myArr)}`);

/**
### Exercise 2: Find the Maximum Number

- Write a function **`findMax(arr)`** that takes an array of numbers as input and returns the maximum number in the array.
*/

console.log('\nExercise 2: Find the Maximum Number\n')

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

let numArr = [5, 12, 7, 9, 4];
console.log(`Max Number: ${findMax(numArr)}`)

/*
### Exercise 3: Remove Duplicates

- Write a function **`removeDuplicates(arr)`** that takes an array as input and returns a new array with duplicate elements removed.
*/

console.log('\nExercise 3: Remove Duplicates\n')

function removeDuplicates(arr) {
    let commonArray = [];
    arr.map((element) => {
        if (!commonArray.includes(element)) {
            commonArray.push(element);
        }
    })
    return commonArray;
}

let dupArray = ['Kevin', 'Man', 'Man', 3, 3, 6, 6];
console.log(`Removed Duplicates: ${removeDuplicates(dupArray)}`)


/*
### Exercise 7: Sum of Squares

- Write a function **`sumOfSquares(arr)`** that takes an array of numbers as input and returns the sum of the squares of each number.
*/

console.log('\nExercise 7: Sum of Squares\n')

function sumOfSquares(arr) {
    let squaredArr = arr.map((num) => num*num);
    let sumOfSquares = squaredArr.reduce((sum, total) => sum + total, 0)
    return sumOfSquares;
}

let squareArr = [3, 4, 5, 6, 7];
console.log(`Sum of Squares: ${sumOfSquares(squareArr)}`)

