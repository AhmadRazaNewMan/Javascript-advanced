

const Function = (str)=>{
    console.log(str)
    const makeArrayOfString = str.split(" ")
   
    let i = 0
    let max = makeArrayOfString[0].length
    let  FinalWord = makeArrayOfString[0]
    while(i<makeArrayOfString.length){
        if(makeArrayOfString[i].length>max){
            
            max = makeArrayOfString[i].length
            FinalWord  = makeArrayOfString[i]

        }
       
        i++ ;
    }
    
    console.log(`The longest word is ${FinalWord} and its length is ${max}`)
    
}
const checkString = "Hello Its Javascript you need to move Forward communication"
Function(checkString)




