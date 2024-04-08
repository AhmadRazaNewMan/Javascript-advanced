console.log("hello world its  day 4 of our challenge");

const checkTrinaglrType = (a, b, c) => {
    if(a === b && b === c){
        console.log("Equilateral");
    }
    else if(a === b || b === c || a === c){
        console.log("Isosceles");
    }
    else{
        console.log("Scalene");
    }
}




checkTrinaglrType(3, 4, 5)
checkTrinaglrType(3, 3, 3)
checkTrinaglrType(3, 3, 5)
