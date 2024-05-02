const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];
    while (!strs.every(str => str.startsWith(prefix))) {
        prefix = prefix.slice(0, -1);
        if (prefix.length === 0) return "";
    }
    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'floght'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''


        
       
      


    



