//* PRACTICE ECERCICES:
/*

*Exercise 1: In this exercise, you will design a feedback form that requires users to provide their email address, age, and a feedback message. Additionally, you will enforce a word count limit of 100 words and a character limit of 5000 characters for the feedback message field. JavaScript will be used to validate the form inputs before submission.

Instructions:
 - Create an HTML form with input fields for email, age, and a message textarea.
 - Implement JavaScript code to validate the email format.
 - Validate the age to ensure it is a number between 18 and 99.
 - Implement word count validation for the message field, limiting it to 100 words.
 - Implement character count validation for the message field, limiting it to 5000 characters.
 - Display appropriate error messages for invalid inputs.
 - Ensure that the form submits only if all validations pass.
 
*/
const form = document.getElementById("feedbackForm");
const email = document.getElementById("email");
const age = document.getElementById("age");
const message = document.getElementById("feedback");
const error = document.getElementById("error")

form.addEventListener("submit", (event) => {
    let errorMessage = '';

    //Todo: Validate email format
    //(We use a regular expression to check if the email is in a valid format.)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Invalid email format"
    }

    //Todo: Validate age
    if (age < 18 || age > 99 || isNaN(age)) {
        errorMessage += "Age must be a number between 18 and 99."
    }

    //Todo: Validate word count and character limit for message
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 100) {
        errorMessage += "Feedback message must be 100 words or less."
    }

    if (message.length > 5000) {
        errorMessage += "Feedback message must be 5000 characters or less."
    }

    //Todo: Ensure that the form submits only if all validations pass.
    if (errorMsg) {
        error.textContent = errorMsg;
        event.preventDefault(); 
    }

    alert('Form submitted successfully!');

})