const AddFunction = (arr1, arr2) => {
    let r_array_1 = arr1.reverse().join(''); // Convert reversed array to string
    let r_array_2 = arr2.reverse().join(''); // Convert reversed array to string
     let newNumebr  = parseInt(r_array_1, 10) + parseInt(r_array_2, 10)
    console.log(Array.from(String(newNumebr),Number)); // Parse string to integer and sum
}

let a1 = [1, 2, 3]; // 321
let a2 = [4, 6, 3]; // 364

AddFunction(a1, a2);
