const Function_1 = (str) => {
    let longestSubstring = "";
    
    for (let i = 0; i < str.length; i++) {
        let currentSubstring = "";
        let j = i;

        while (j < str.length && !currentSubstring.includes(str[j])) {
            currentSubstring += str[j];
            console.log(currentSubstring)
            j++;
            console.log(j)
        }

        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
            console.log(longestSubstring)
        }
    }

    return longestSubstring.length;
}

console.log(Function_1("abacabcbb")); 
// console.log(Function_1("bbbbb")); 
// console.log(Function_1("pwwkew")); 
