console.log("New day New Challenge")
const vovelChecker = (str)=>{
    console.log(str.match(/[aeiou]/gi).length) 
    // .match(/[aeiou]/gi): The match() method is used to search a string for a pattern specified by a regular expression. Here, the regular expression /[aeiou]/gi is used.
    // /[aeiou]/: This regular expression matches any vowel (a, e, i, o, u) in a case-insensitive manner (i flag).
    // g flag: This flag indicates a global search, meaning it will find all matches in the string rather than just the first one.
    // So, str.match(/[aeiou]/gi) searches the string str for all occurrences of vowels (case-insensitive) and returns an array containing all the matches.

}
vovelChecker("Hello WOrld and I am So ThOIrsty")// output 3
