console.log("Hello World its day 06 of our challenge");

const largestFunctionFinder = (str) => {
    let dividedString = str.split(" ");
    let max = dividedString[0].length;
    let finalWord = dividedString[0];
   
    dividedString.map((item) => {
        if (max < item.length) {
            max = item.length;
            finalWord = item;
        } 
    });
    console.log(`The longest word is ${finalWord} and its length is ${max}`);
    return finalWord; // Add this line to return the longest word
}

largestFunctionFinder("Hello World its day 06 of our challenge");
