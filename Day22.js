const calculateMedian = (arr)=>{
    const sortedArray  = arr.sort((a,b)=>a-b);
    const middleIndex = Math.floor(sortedArray.length/2);
    if(sortedArray.length % 2 === 0){
        console.log((sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2)
   
    }
    else{
     console.log(sortedArray[middleIndex])
    }

}

calculateMedian([1,2,3,4,5,6,7,5])

