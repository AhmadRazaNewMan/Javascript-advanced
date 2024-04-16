const removerSpaces = (arr) => {
 
    return arr.filter((item, index) => item !== arr[index + 1]);
}

console.log(removerSpaces([1, 2, 3, 3, 5])); // Output: [1, 2, 3, 5]
