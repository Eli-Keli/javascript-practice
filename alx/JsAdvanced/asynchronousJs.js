// *Callbacks
/* 
 Callbacks are functions passed as arguments to other functions.
 - They are invoked after the function they are passed to has finished its task.
 - They are commonly used in asynchronous operations to handle the result of an asynchronous task.
The problem with callbacks is that they can lead to callback hell, which is when you have a lot of nested callbacks, making the code difficult to read and maintain.
*/


//* This function simulates fetching data asynchronously with a delay of 2 seconds.
//* It takes a callback function as a parameter, which will be called once the data is fetched.

function fetchData(callback) {
    setTimeout(() => {
        //* calling the call back function once it is finished
        callback('Data fetched successfully');
    }, 2000); //* Simulating a delay of 2 seconds
}


//TODO: log the completion message to the console.
function logMessage(message) {
    console.log(message);
}

//TODO: Fetch data using the fetchData function and log the fetched data.
fetchData(logMessage);



//* Promises

/*
 - Promises are introduced as a way to avoid callback hell or pyramid of doom.
 - Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.
 - They have three states: pending, fulfilled, and rejected.
 - The then method is used to handle the fulfilled state, and the catch method is used to handle the rejected state.
 - They provide a cleaner alternative to callbacks for handling asynchronous code.
*/

//* This function returns a promise that simulates fetching data asynchronously with a delay of 2 seconds.
function fetchNewData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //TODO: Try changing this to reject to see it beeing loggeds as error 
            resolve('New Data fetched successfully');
        }, 2000);
    });
}

//* Example usage: Fetching data using the fetchData function and handling the success and error cases.
fetchNewData()
    .then(data => {
        //TODO: Log the fetched data to the console upon successful retrieval
        console.log(data); 
    })
    .catch(error => {
        //TODO: Log any errors to the console if the data fetching fails
        console.error(`Error: ${error}`); 
    });





//* Async/Await
/*
Async/await is a new syntax introduced in ES6 (ECMAScript 2015) that simplifies working with promises. Async functions are functions that implicitly return a promise.

 - The async keyword is used to declare an async function. Async functions can use the await keyword to pause execution until a promise is resolved.
 - They provide a more readable and synchronous-like way to write asynchronous code.
 - Error handling in async/await functions is typically done using try…catch blocks to gracefully handle any potential errors that may occur during asynchronous operations.
*/

async function fetchSomeData() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('Fetched some data successfully');
            }, 2000);
        });
        console.log(result);
    } catch (error) {
    console.error(`Error: ${error}`);
    }
}

fetchSomeData();





