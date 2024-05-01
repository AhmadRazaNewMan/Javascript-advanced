// this program will find out the longest possible sub array that will have equal number of even and odd numbers

const FindSubArrHavingEqualNumberOfEvenAndOdd = (arr) => {
    const n = arr.length;
    let evenCount = 0;
    let oddCount = 0;
    let evenArr = [];
    let oddArr = [];
    let newArr = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
            evenArr.push(arr[i]);
        } else {
            oddCount++;
            oddArr.push(arr[i]);
        }
    }
    
    if (evenCount === oddCount) {
       
       newArr = [...evenArr,...oddArr]
       console.log(newArr)

        

    } 
    else if(evenCount > oddCount) {
        for(let j = 0;j<oddCount;j++){
            newArr.push(oddArr[j])
            newArr.push(evenArr[j])

            console.log(newArr)

        }
    }
    else if(oddCount > evenCount){
        for(let k = 0;k<evenCount;k++){
            newArr.push(evenArr[k])
            newArr.push(oddArr[k])

            console.log(newArr)
        }
    }
    else {
        console.log("No subarray found with equal counts of even and odd elements.");
    }
}

FindSubArrHavingEqualNumberOfEvenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,67]);
