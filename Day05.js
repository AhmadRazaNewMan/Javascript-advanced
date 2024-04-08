console.log("Hello World its day 05 of our challenge");

const sortArray = (arr) => {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return arr;
   
}

console.log(sortArray([2, 1, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12]));
console.log(typeof sortArray[2])
