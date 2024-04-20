const  examople  =(str)=>{
    let test_1 = str.split("")
    console.log(test_1)
    
        let sum = 0;
        for(let i = 0; i < test_1.length; i++){
            sum += Number(test_1[i])
        }
        console.log(sum)

}
examople("1234")