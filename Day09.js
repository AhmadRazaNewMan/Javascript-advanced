const FindAverageNumber = (arr) => {
    const ArrayLength = arr.length;
    let flag = 0;
    let Average = 0
    arr.map((item) => {
        flag += item;
         Average = flag / ArrayLength;
      
        
    })
    console.log(Average);
   
    
}

FindAverageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])