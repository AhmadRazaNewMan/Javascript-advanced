const NewMethod = (number) => {
    let isPowerOfTwo = false;
    for (let i = 0; i < number; i++) {
        if (number === 2 ** i) {
            isPowerOfTwo = true;
            break; // Exit the loop once we find a match
        }
    }
    console.log(isPowerOfTwo);
}

NewMethod(64); // Output: true
