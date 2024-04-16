const Day_11_problem = (number) =>{
    const numberInString  = number.toString().split('').map(Number);
    let sum = 0; 
    numberInString.map((item) => {
        sum += item; 
    });
    console.log(sum); 
}

Day_11_problem(12456);
