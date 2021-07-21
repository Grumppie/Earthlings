const form = document.getElementById("form");
const userName = document.getElementById("name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const message = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
    removeClass();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();

    if (userNameValue === "") {
        setErrorFor(userName, "Name is required");
    } else {
        setSuccessFor(userName);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email is required");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
    } else {
        setSuccessFor(email);
    }

    if (phoneNumberValue.length == 10) {
        setSuccessFor(phoneNumber);
    } else if (phoneNumberValue === "") {
        setErrorFor(phoneNumber, "Phone Number is required");
    } else {
        setErrorFor(phoneNumber, "Not a valid phone Number");
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;

    formControl.className = 'container error';


    const small = formControl.querySelector("small");
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "container success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

user[userName, phoneNumber, email, message] = {

    // userName = 'Sarthak Pawar'
    // phoneNumber = 9284201590 
    // email = sarthakrajes777@gmail.com
    // message = ""

}

