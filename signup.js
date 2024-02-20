// Import bcrypt for password hashing
const bcrypt = require('bcryptjs');
// Import email-validator for email validation
const validator = require('email-validator');

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');

    // Add event listener to the signup form
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const username = signupForm.elements.username.value;
        const password = signupForm.elements.password.value;
        const confirmPassword = signupForm.elements.confirmPassword.value;
        const firstName = signupForm.elements.firstName.value;
        const lastName = signupForm.elements.lastName.value;
        const email = signupForm.elements.email.value;

        // Perform validation
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Validate email
        if (!validator.validate(email)) {
            alert("Invalid email address. Please enter a valid email.");
            return;
        }

        // Hash the password using bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
// Import bcrypt for password hashing
const bcrypt = require('bcryptjs');
// Import email-validator for email validation
const validator = require('email-validator');

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');

    // Add event listener to the signup form
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const username = signupForm.elements.username.value;
        const password = signupForm.elements.password.value;
        const confirmPassword = signupForm.elements.confirmPassword.value;
        const firstName = signupForm.elements.firstName.value;
        const lastName = signupForm.elements.lastName.value;
        const email = signupForm.elements.email.value;

        // Perform validation
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Validate email
        if (!validator.validate(email)) {
            alert("Invalid email address. Please enter a valid email.");
            return;
        }

        // Hash the password using bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Prepare user data
        const userData = {
            username: username,
            hashedPassword: hashedPassword,
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Show success message
        successMessage.classList.remove('hidden');

        // Reset the form after 3 seconds
        setTimeout(function() {
            signupForm.reset();
            successMessage.classList.add('hidden');
        }, 3000);
    });
});

        // Prepare user data
        const userData = `Username: ${username}\nHashed Password: ${hashedPassword}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`;

        // Prepare text file download
        const blob = new Blob([userData], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'userData.txt';

        // Simulate click to trigger download
        downloadLink.click();

        // Show success message
        successMessage.classList.remove('hidden');

        // Reset the form after 3 seconds
        setTimeout(function() {
            signupForm.reset();
            successMessage.classList.add('hidden');
        }, 3000);
    });
});
