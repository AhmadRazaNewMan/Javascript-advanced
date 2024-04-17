const day15Problem = (arr) => {
    const sumOfSquares = arr.reduce((acc, current) => acc + current * current, 0);
    console.log(sumOfSquares);
}

day15Problem([1,2,3,4]);
