// console.log("Hello World its day 24 of our challenge");
//The Time Complexity of this Approach is O(n^2)
// const calcuteOccurance = (arr) => {
//     let i,j,count = 0;
//     let newObject = {};
//     for(i = 0;i<arr.length;i++){
//         for(j = 0;j<arr.length;j++){
//             if(arr[i] == arr[j]){
//                 count++;
//             }
//         }
//         newObject[arr[i]] = count;
//         count = 0;
   
    
// }
// console.log(newObject)
// }
// calcuteOccurance([1,2,3,4,4,5,5,5,2,1,2,3,4,])


// The Time Complexity of this Approach is O(n)
const calcuteOccurance = (arr) => {
    let frequencyMap = {};
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
    
    // Output the frequency map
    console.log(frequencyMap);
}

calcuteOccurance([1,2,3,4,4,5,5,5,2,1,2,3,4]);
