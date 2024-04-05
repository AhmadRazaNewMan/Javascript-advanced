console.log("A New Day with a new problem");

let flag  = 0 ;

const countCharInString = (str, char) => {
    const charConvertion = char.toLowerCase();
    const stringConversion = str.toLowerCase().replace(/\s/g, '');
    
    for (let i = 0; i < stringConversion.length; i++) {
        if (stringConversion[i] === charConvertion) {
            flag++;
        }
    }
    
    if (flag === 0) {
        return `The character ${char} is not present in the string`;
    }
    
    return `The character ${char} is present ${flag} times in the string`;
}

const StringForTest = "Hello Its Javascript you need to move Forward communication";
console.log(`The string is ${StringForTest}`);
const char = "a";
console.log(`Checking how many times the character ${char} is present in the string`);

console.log(countCharInString(StringForTest, char)); // Output: 4
