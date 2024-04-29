const countCharInString = (str) => {
    let test_1 = str.split(" ").join("");
    console.log(test_1.length);
    let newString = "";
    for (let i = test_1.length - 1; i >= 0; i--) {
        newString += test_1[i];
    }
    console.log(newString+newString);
}

countCharInString("Ahmad Raza");

