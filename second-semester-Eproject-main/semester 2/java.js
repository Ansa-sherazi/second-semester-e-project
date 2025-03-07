
// signup

function handleEvent(event){
	event.preventDefault();
	alert('Your Form Submitted!')
  }







  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
    }
    
    function validateInput(input, regex, message) {
        if (!regex.test(input.value)) {
            showError(input, message);
            return false;
        } else {
            showError(input, "");
            return true;
        }
    }
    
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value || password.value === "") {
            showError(confirmPassword, "Passwords do not match!");
            return false;
        } else {
            showError(confirmPassword, "");
            return true;
        }
    }
    
    username.addEventListener("input", function () {
        validateInput(username, /^[a-zA-Z0-9]{3,20}$/, "Only letters & numbers (3-20 characters). ");
    });
    
    email.addEventListener("input", function () {
        validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format.");
    });
    
    password.addEventListener("input", function () {
        let errorMsg = "";
        if (password.value.length < 8) errorMsg += "At least 8 characters. ";
        if (!/[A-Z]/.test(password.value)) errorMsg += "1 uppercase letter. ";
        if (!/\d/.test(password.value)) errorMsg += "1 number. ";
        if (!/[\W_]/.test(password.value)) errorMsg += "1 special character. ";
        
        showError(password, errorMsg);
        validatePasswordMatch();
    });
    
    confirmPassword.addEventListener("input", validatePasswordMatch);
    
    form.addEventListener("submit", function (event) {
        if (!validateInput(username, /^[a-zA-Z0-9]{3,20}$/, "Only letters & numbers (3-20 characters). ") ||
            !validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format.") ||
            password.nextElementSibling.textContent ||
            confirmPassword.nextElementSibling.textContent) {
            event.preventDefault();
            alert("Please fix the errors before submitting.");
        }
    });
});






// login


  function handleEvent(event){
	event.preventDefault();
	alert('Your Form Submitted!')
  }





// forgetpass

function handleEvent(event){
	event.preventDefault();
	alert('Your Form Submitted!')
  }














