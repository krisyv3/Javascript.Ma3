//Use RegEx to validate form

function CheckNumber() {
    var numPatt = /\d{7}/;
    var phoneValue = document.getElementById("phoneNumber");
    var finalValue = numPatt.test(phoneValue.value);
   
    
    if (finalValue === true) {
        console.log("it lives");
    }
    else {
        console.log("something's wrong");
    };
};