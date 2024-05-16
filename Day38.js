console.log("Day 38 Problem")

const FindLogestWord = (str) =>{

    let array = str.split(" ")
    let max = array[0].length
    let longestWord = array[0]
    for(let i = 1;i<array.length;i++){
        if(array[i].length>max){

            max = array[i].length
            longestWord = array[i]

    }}
    console.log(longestWord)
}

FindLogestWord("A quick brown fox jumbed overeeer a lazy dog")