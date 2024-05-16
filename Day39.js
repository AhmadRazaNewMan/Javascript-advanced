console.log("day 39 Problem");

const newProblem = (str) => {
  
    let newString = str.replace(/[^a-zA-Z]/g, '').toLowerCase();  // I remove the 
   
   
    let reverseString = newString.split('').reverse().join('');
    
    
    if (newString === reverseString) {
        console.log("The Given String is palindrome");
    } else {
        console.log("The Given String is not palindrome");
    }
}

newProblem("racecar");
newProblem("A man, a plan, a canal, Panama");
newProblem('hello')
