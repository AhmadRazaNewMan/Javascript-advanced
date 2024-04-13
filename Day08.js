const factorialOfNumber = (number) => {
    if (number < 0) {
        return null; 
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorialOfNumber(number - 1);
}

console.log(factorialOfNumber(5));
console.log(factorialOfNumber(0));
console.log(factorialOfNumber(1));
console.log(factorialOfNumber(2));
console.log(factorialOfNumber(4));



