console.log("Hello World");

const generateHashFunction = (str) => {
    const makeArrayOfString = str.split(" ");
    const modifiedString = [];
    console.log(makeArrayOfString);
    for (let i = 0; i < makeArrayOfString.length; i++) {
        const sliceString = makeArrayOfString[i].slice(1);
        const makeUpperCase = makeArrayOfString[i].charAt(0).toUpperCase() + sliceString;
        modifiedString.push(makeUpperCase);
    }
    console.log(`#${modifiedString.join("")}`); // Joining modified strings here
}

const testString = "Hello its javascript day 2 problem";
generateHashFunction(testString);
