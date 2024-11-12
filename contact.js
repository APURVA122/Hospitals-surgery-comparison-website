// contact.js - JavaScript Form Validation

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Check if name is filled out
    if (name.trim() === "") {
        alert("Please enter your name.");
        event.preventDefault();  // Prevent form submission
        return;
    }

    // Check if email is filled out and is in a valid format
    if (email.trim() === "") {
        alert("Please enter your email address.");
        event.preventDefault();
        return;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Check if subject is filled out
    if (subject.trim() === "") {
        alert("Please enter a subject.");
        event.preventDefault();
        return;
    }

    // Check if message is filled out
    if (message.trim() === "") {
        alert("Please enter a message.");
        event.preventDefault();
        return;
    }

    // If all validations pass, form is submitted
});

// Function to validate email format using regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}