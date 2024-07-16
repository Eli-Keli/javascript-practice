//* Fetching data from APIs 
/*
When you are fetching data from the API, it’s important to understand the HTTP protocol.

*HTTP (Hypertext Transfer Protocol)
    - The language of the web: Think of HTTP as the language your browser and web servers use to talk to each other. It defines a set of rules for exchanging data like text, images, videos, and other files across the web.
    - Client-Server model: HTTP follows a request-response pattern:
    - Client (your browser) sends a request to a server for a resource (e.g., an HTML page, an image).
    - Server processes the request and sends back a response.
When fetching data from APIs in JavaScript, it’s essential to understand that this process is asynchronous. The Fetch API is a modern approach to retrieve data from a server asynchronously. It offers a promise-based interface, which is more intuitive and easier to manage compared to traditional callback methods.

? 1. Request Methods
Instructions for the server: Request methods tell the server what action you want to perform on a resource. Here are the most common ones:
    - GET: “Please give me this resource.“ (Retrieves data)
    - POST: "Please create a new resource with this data.” (Sends data to create something)
    - PUT: “Please replace an existing resource with this new data.” (Updates data)
    - DELETE: “Please delete this resource.” (Removes data)

? 2. Status Codes
The server’s reply: HTTP status codes are numbers in the response that tell you the result of the request. Here’s a simplified categorization:
    - 200s (Success): Everything went as intended. (Example: 200 OK)
    - 300s (Redirection): The resource might be moved, let me send you to the new location.
    - 400s (Client Errors): Looks like you made a mistake in your request. (Example: 404 Not Found)
    - 500s (Server Errors): Whoops! Something went wrong on the server’s side.

? 3. Headers
Extra context: Headers are like luggage tags on your request or response. They carry extra information, including:
    - Content-Type: Specifies the type of data (e.g., ‘text/html’, ‘application/json’).
    - Authorization: Provides credentials to access protected resources.
    - Cache-Control: Gives instructions on how to cache content (for performance).
    - And many more!


*Why do these concepts matter for the Fetch API?

The Fetch API builds on top of HTTP. When you use the Fetch API, you’re essentially crafting HTTP requests and interpreting the responses.
Understanding request methods helps you choose the right method to interact with a web API. Status codes allow you to check if your Fetch API requests succeeded or if there were errors. Sometimes, you’ll need to manipulate HTTP headers directly in your Fetch API calls (especially for things like authentication).

*Understanding the Fetch API

The Fetch API provides the fetch() function, which takes a URL as its parameter and returns a Promise that resolves to the Response object representing the response to the request.

    *Key Steps:

    *Initiating a Request:

    Start by calling the fetch() function and providing the URL of the resource you want to fetch as the first argument. Optionally, provide a second argument, an options object, to customize the request:

    *method: ‘GET’, ‘POST’, ‘PUT’, ‘DELETE’, etc. (‘GET’ is the default)
    *headers: An object containing request headers
    *body: Data to send in the request body (commonly used for POST, PUT, etc.)

    *Handling the Response (Promise-Based):

    fetch() returns a Promise. Use .then() to handle successful responses and .catch() to handle errors. Examine the response.ok property: Check if the server returned a successful status code (in the 200-299 range). Throw an error if not.

    Convert the response to the desired format: Use methods like response.json(), response.text(), or others to obtain the data in a usable format.

    *Error Handling: Always use the .catch() method to catch network errors, server errors, or errors occurring during response parsing.
*/


//* Example (Sending a POST Request):
// fetch('https://api.example.com/data', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Bearer <your_token>',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'New Data',
//         description: 'Important information'
//     }) //* it should be changed to string
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json(); 
// })
// .then(data => {
//     console.log('Success:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });


//TODO: Now try to write the above in async / await, before you see the implementation below.

// async function fetchAPIData() {
//   try {
//     const response = await fetch('https://api.example.com/data');

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json(); 
//     console.log('Success:', data); 
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchAPIData();







//* PRACTICE EXERCISE

//TODO Exercise 1: Fetching and Logging a Random Activity from the Bored API
/*
In this exercise, you’ll use the JavaScript Fetch API and promises to fetch a random activity suggestion from the Bored API and log it to the console.

*Step-by-Step Guide:

* Understanding the Bored API:
    - The Bored API provides random activity suggestions when you’re feeling bored.
    - It offers a simple REST API interface accessible at https://bored-api.appbrewery.com/

* Making the Fetch Request:
    - We’ll create a function named getBoredActivity to encapsulate the logic for fetching and handling the activity suggestion.
    - Inside the getBoredActivity function:
    - Use the fetch() function to make a network request to the Bored API endpoint.
    - Chain a .then() to handle the successful response.
    - Check if the response is okay using response.ok.
    - Convert the response to JSON using response.json() to extract the activity data.
    - Log the random activity suggestion to the console.
*/

// Todo 1: Create a function named getBoredActivity to encapsulate the logic for fetching and handling the activity suggestion
function getBoredActivity() { //!Depriated method
    // Todo 2: Use the fetch() function to make a network request to the Bored API endpoint
    fetch("https://www.boredapi.com/api/activity")
        // Todo 3: Chain a .then() to handle the successful response.
        .then(response => {
            // Todo 4: Check if the response is okay using response.ok.
            if (response.ok) {
                // Todo 5: Convert the response to JSON
                return response.json();
            } else {
                // Todo 6: If response is not okay, throw an error
                throw new Error("The network request was not okay");
            }
        })
        .then(data => {
            // Todo 7: Log the random activity suggestion to the console
            console.log(data.activity);
        })
        .catch(error => {
            // Todo 8: Log any errors that occur during the fetch
            console.error( error);
        });
}






/*
TODO: Exercise 2: In this exercise you’ll enhance the getBoredActivity function to use async/await syntax and include a callback parameter. Once the fetching of the activity is completed, the callback function will be invoked, logging the received activity.

Instructions:
    - Modify the getBoredActivity function to use async/await syntax.
    - Use the await keyword to wait for the fetch operation to complete and parse the response as JSON.
    - Invoke the callback function with the received activity as its argument.
    - Define a callback function named logActivity that logs the received activity to the console.
    - Call the getBoredActivity function, passing the logActivity function as the callback.
*/

// Todo 1: Modify the getBoredActivity function to use async/await syntax
async function getBoredActivity(callback) {
    try {
        // Todo 2: Use the await keyword to wait for the fetch operation to complete and parse the response as JSON
        const response = await fetch("https://www.boredapi.com/api/activity");
        
        if (!response.ok) {
            //* If response is not okay, throw an error
            throw new Error("The network request was not okay");
        }
        
        const data = await response.json();
        
        // Todo 3: Invoke the callback function with the received activity as its argument
        callback(data.activity);
    } catch (error) {
        //* Log any errors that occur during the fetch
        console.error(error);
    }
}

// Todo 4: Define a callback function named logActivity that logs the received activity to the console
function logActivity(activity) {
    console.log(activity);
}

// Todo 5: Call the getBoredActivity function, passing the logActivity function as the callback
getBoredActivity(logActivity);
