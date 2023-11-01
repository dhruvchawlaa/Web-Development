// Generating a score between 1 and 100 inclusive
var score = Math.random();

// Method 1
console.log(Math.ceil(score * 100));

// Mathod 2
console.log(Math.floor(score * 100) + 1);
