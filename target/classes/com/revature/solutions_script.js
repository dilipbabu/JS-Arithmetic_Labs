function add(a, b) {
    // TODO: Implement the addition function
    return a+b;
}

function subtract(a, b) {
    // TODO: Implement the subtraction function
    return a-b;
}

function multiply(a, b) {
    // TODO: Implement the multiplication function
    return a * b;
}

function divide(a, b) {
    // TODO: Implement the division function, also make sure to check if any of the values are = 0 before proceeding!

    // Remeber java does not support undefined, if you try returning undefined it'll convert it to null! 
  
    if (a == 0 || b == 0){
    return "undefined";
  }else{
    return a/b;
  }
}

function modulus(a, b) {
    // TODO: Implement the modulus function
    return a%b;
}

function exponentiate(base, exponent) {
    // TODO: Implement the exponentiation function
    return base ** exponent;
}



