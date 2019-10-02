//Use RegEx to validate form

function checkEmail() {
    var emailPatt = /(.+)@(.+){2,}\.(.+){2,}/
    var emailValue = document.getElementById("email");
    var emailFinalValue = emailPatt.test(emailValue.value);

    if (emailFinalValue === true) {
        console.log("Email is OK!");
    }
    else {
        console.log("email is missing!");
    };
};

function checkLastName() {
    var lastNamePatt = /\S+/;
    var lastNameValue = document.getElementById("lName");
    var lastNameFinalValue = lastNamePatt.test(lastNameValue.value);

    if (lastNameFinalValue === true) {
        console.log("Last name is OK");
    }
    else {
        console.log("last name is missing!");
    };
};

function checkName() {
    var namePatt = /\S+/;
    var nameValue = document.getElementById("fName");
    var nameFinalValue = namePatt.test(nameValue.value);

    if (nameFinalValue === true) {
        console.log("First name is OK");
    }
    else {
        console.log("First name is missing!")
    };
};


function checkNumber() {
    var numPatt = /\d{7}/;
    var phoneValue = document.getElementById("phoneNumber");
    var finalValue = numPatt.test(phoneValue.value);
   
    
    if (finalValue === true) {
        console.log("PhoneNumber is OK!");
    }
    else {
        console.log("PhoneNumber is missing!");
    };
};

function multipleFunctions() {
    checkNumber();
    checkName();
    checkLastName();
    checkEmail();
}