const letString = '123'
let splitNumber = letString.split('')
let newArray = []
for (var i=0;i<splitNumber.length;i++){
    newArray.push(Number(splitNumber[i]))
}

console.log(newArray)