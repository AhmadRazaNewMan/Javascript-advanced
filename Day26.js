// const newDayFunction = (str,number)=>{
//     let newString = ""
//     for(let i = 0;i<number;i++){

//         newString+=str;
       
//     }
//   console.log(newString)
// }

// newDayFunction("Abc",20)

const newDayFunction = (str, number) => {
    const newString = str.repeat(number);
    console.log(newString);
  };
  
  newDayFunction("Abc", 50);
  