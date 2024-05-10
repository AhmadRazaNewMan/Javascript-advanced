console.log("Hello world its days 36 of my 100 days of js")
let currentDate = new Date();
let currentSeconds =( currentDate.getSeconds());
let randomValue = (currentSeconds  / 60) * 10;
console.log( Math.ceil(randomValue));
