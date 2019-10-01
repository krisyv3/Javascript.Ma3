//Use RegEx to validate form

function myfunction() {
    let numPatt = /0\d{5}7/;
    let phoneValue = document.getElementById(phoneNumber).Value;
  

    if (numPatt.test(phoneValue) === true) {
        document.getElementById(phoneNumber).style.bordercolor = "green";
    }
    else {
        document.getElementById(phoneNumber).style.bordercolor = "red";
    };
};