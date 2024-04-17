// console.log("Hello World its day 18 of our challenge");

// const findUpperOrLowerCase = (string) => {
//     let asciiValue = string.charCodeAt(0);
//     console.log(asciiValue);
//     if (asciiValue >= 97 && asciiValue <= 122) {
//         console.log("Lowercase");
//     } else {
//         console.log("Uppercase");
//     }
// }

// findUpperOrLowerCase('A');

const findUpperOrLowerCase = (char) => {
    if (char === char.toUpperCase()) {
        console.log("Uppercase");
    } else if (char === char.toLowerCase()) {
        console.log("Lowercase");
    } else {
        console.log("Not a letter");
    }
}

findUpperOrLowerCase('A'); 

