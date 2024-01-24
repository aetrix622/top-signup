// form fields
const form = document.getElementById("signupform");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("password");
const pass2 = document.getElementById("confirm-password");

// error divs
const firstNameError = document.querySelector("div.firstname.error");
const lastNameError = document.querySelector("div.lastname.error");
const emailError = document.querySelector("div.email.error");
const phoneError = document.querySelector("div.phone.error");
const passError = document.querySelector("div.password.error");
const pass2Error = document.querySelector("div.confirm-password.error");

form.noValidate = true;

form.addEventListener("submit", e => {
    const form = e.target;

    // clear any previous errors
    Array.from(document.querySelectorAll("div.error")).forEach(element => {
        element.textContent="";
    });
    Array.from(document.querySelectorAll(".field > input")).forEach(element => {
        element.noValidate = true;
        if (element.classList.contains("invalid")) {
            element.classList.remove("invalid");
        }
    });

    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    if (!form.checkValidity()) {
        e.preventDefault();
        console.log("form.checkValidity() FALSE!");
    }

    // validate first name
    if (!firstName.validity.valid) {
        firstName.classList.add("invalid");

        if (firstName.validity.valueMissing) {
            firstNameError.textContent = "Required";
        }

        if (firstName.validity.patternMismatch) {
            firstNameError.textContent = "Invalid: Use A-Z only";
        }
    }
    else {
        firstName.value = capitalize(firstName.value);
    }

    // validate last name
    if (!lastName.validity.valid) {
        lastName.classList.add("invalid");

        if (lastName.validity.valueMissing) {
            lastNameError.textContent = "Required";
        }

        if (lastName.validity.patternMismatch) {
            lastNameError.textContent = "Invalid: Use A-Z only";
        }
    }
    else {
        lastName.value = capitalize(lastName.value);
    }

    // validate email
    if (!email.validity.valid) {
        email.classList.add("invalid");

        if (email.validity.valueMissing) {
            emailError.textContent = "Required";
        }

        if (email.validity.typeMismatch) {
            emailError.textContent = "Enter a valid email address";
        }

    }
    // validate phone number
    if (!phone.validity.valid) {
        phone.classList.add("invalid");

        if (phone.validity.patternMismatch) {
            phoneError.textContent = "Enter a valid phone number";
        }
    }

    // validate passwords
    if (pass.value !== pass2.value) {
        e.preventDefault();
        pass2.classList.add("invalid");
        pass2Error.textContent = "Passwords do not match"
    }

    if (pass.validity.valueMissing) {
        pass.classList.add("invalid");
        passError.textContent = "Required";
    }

    if (pass.validity.patternMismatch) {
        pass.classList.add("invalid");
        passError.textContent = "Needs at least 8 characters with at least one capital, lowercase, numeral, and !@#$%?"
    }

    // Let's not actually submit anything since this is
    // just an exercise:
    if (!e.defaultPrevented) {
        e.preventDefault();
        alert("The form input has been confirmed to be valid. Actual submission has been prevented since this is just an exercise ;-)");
    }
});