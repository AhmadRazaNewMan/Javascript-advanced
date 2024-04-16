function removeDuplicates(array) {
    // Create a Set from the array to automatically remove duplicates

    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}


const arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5,1];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
