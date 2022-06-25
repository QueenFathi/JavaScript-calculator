function ValidatefirstInput(firstInput) {
    if (isNaN(firstInput)) {
        alert("Refresh and enter a valid number");
        return ValidatefirstInput(firstInput)
    } else {
        return firstInput;
    }
}
var firstInput = ValidatefirstInput(parseFloat(prompt("Enter a number")));

var operator = prompt("Specify the operation: /,  +, -, * ");

function ValidateSecondInput(secInput) {
    if (isNaN(secInput)) {
        alert("Refresh and enter a valid second number");
        return ValidateSecondInput(secInput)
    } else {
        return secInput;
    }
}
var secInput = ValidateSecondInput(parseFloat(prompt("Enter the second number")))

let result = 0

if (operator=="+"){
    result = firstInput + secInput;
} else if (operator=="-"){
    result= firstInput - secInput;
} else if (operator=="/"){
    result = firstInput / secInput;
} else if (operator=="*"){
    result = firstInput * secInput;
} else {
    alert("Refresh and enter any operator of the following: /,  +, -, * ")
}

alert(firstInput+operator+secInput+"= "+result);
