// console.log("Hello World its day 19 of our challenge");


// const checkSubstring = (str,substring)=>{
//     const strSplit = str.split(" ");
    
//     if(strSplit[0]===substring ) {
//         console.log("True")
//     }else{
//         console.log("False")
//     }
   


// }


// checkSubstring("Hello World its day 19 of our challenge","World")// False 
// checkSubstring("Hello world its new day","Hello")// true


const checkSubstring = (str, substring) => {
    if (str.startsWith(substring)) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkSubstring("This is a test string", "This")
checkSubstring("This is a test string", "test")