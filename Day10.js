const dayProblem = (arr_1,arr_2)=>{
   if(arr_1.length !==arr_2.length){
       console.log("The array are not equal")
   }
    const IsTrue = arr_1.every((item,index)=>{
        return item === arr_2[index]
    })
    if(IsTrue){
        console.log("The array are equal")
    }
    else{
        console.log("The array are not equal")
    }
 
    


}

dayProblem([1,2,3,4],[1,2,3,4])