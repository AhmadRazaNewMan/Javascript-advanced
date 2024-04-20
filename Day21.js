console.log("Hello World its day 21 of our challenge");


const calculateMean=(arr)=>{

    const sum  = arr.reduce((acc,curr)=>acc+curr,0);

    const mean = sum/arr.length;
     return mean;


}
console.log(calculateMean([1,2,3,4,5,6]))