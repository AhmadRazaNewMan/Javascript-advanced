const largestFunctionFinder = (arr) => {
    const max = arr.reduce((acc, curr) => {
        return curr > acc ? curr : acc;
    }, arr[0]);

    console.log(max);
}

largestFunctionFinder([-2, -3, -1, -20, -10, -8, -9, -19]);


const arr = [2, 1, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12];
const st = "ahmad"
const newst =  [...st];
console.log(typeof (newst))

