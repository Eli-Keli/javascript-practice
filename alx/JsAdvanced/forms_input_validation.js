//* Forms and Input Validation
/*
*Understanding HTML Forms:
HTML forms are fundamental elements used for collecting and submitting user data on the web. They enable interaction between users and websites by allowing users to input information, make selections, and submit data to servers for processing.

*Introduction to HTML Form Elements:
HTML forms are created using the <form> element, acting as containers for various input elements like text fields, checkboxes, radio buttons, dropdown menus, and buttons. JavaScript can reference forms using DOM methods like getElementById() or document.forms.

*Form Structure and Attributes:
HTML forms can have various attributes like action, method, target, and name, controlling their behavior and appearance.

*JavaScript and Form Handling: 
JavaScript uses the HTMLFormElement object to represent forms, providing methods like submit() and reset() for form handling. Event listeners, such as submit and reset, allow adding interactivity to forms.

*Submit Event:
 A form typically has a submit button triggering the submit event, sending form data to the server. Event listeners can be attached using addEventListener(), enabling custom validation and submission logic.

*Reset Event: 
The reset event triggers when the form is reset, clearing form fields using the reset() method.

*Accessing Form Fields: 
Form fields can be accessed using DOM methods like getElementsByName(), getElementById(), and form.elements, allowing manipulation of form data.

*Form Validation:
Form validation ensures submitted data is accurate before processing. HTML5 provides built-in validation attributes like required, pattern, min/max, and type, while JavaScript allows for more sophisticated validation logic.

*HTML Form Validation:

? Required:
    Specifies that a field must be filled out before the form can be submitted.
?Pattern:
    Specifies a regular expression pattern that the input value must match. Useful for enforcing specific formats (e.g., email addresses or phone numbers).
?Min and Max:
    Specify the minimum and maximum values for an input field, applicable for number or date inputs. Minlength and Maxlength: Specify the minimum and maximum length of the input value.
?Type:
    Specifies the type of input expected, such as email, number, date, etc., allowing browsers to provide appropriate input controls and validation
*/

//* JavaScript Form Validation
// JavaScript provides flexibility for complex validation logic, intercepting form submission events and validating input fields dynamically.



//* Registration Form: A complete example of a registration form with client-side validation using JavaScript demonstrates the integration of HTML forms, JavaScript form handling, and form validation techniques.

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  //Todo: Validate username
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  if (usernameInput.value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long.";
  } else {
    usernameError.textContent = "";
  }

  //Todo: Validate email
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }

  //Todo: Validate password
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
  } else {
    passwordError.textContent = "";
  }

  //Todo: Validate age
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (ageInput.value < 18 || ageInput.value > 99) {
    ageError.textContent = "Age must be between 18 and 99.";
  } else {
    ageError.textContent = "";
  }

  //Todo: If all validations pass, submit the form
  form.submit();
});





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