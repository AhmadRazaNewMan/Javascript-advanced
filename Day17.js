console.log("Hello World its day 17 of our challenge");

const toCamelCase = (str) => {
    const splitArray = str.trim().split(" ");
    const camelCaseArray = splitArray.map((item, index) => {
        if (index === 0) {
            return item;
        } else {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        }
    });

    return camelCaseArray.join("");
}

console.log(toCamelCase("It me Ahmad Raza"));
