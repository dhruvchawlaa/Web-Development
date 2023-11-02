var guestList = ["Dhruv", "Shagun", "Ghazal", "Ankit", "Ayush", "Nishant"];

// Accessing elements at index positions
console.log(guestList[1]);

// Checking if the array includes an elements
console.log(guestList.includes("Ghazal"));

// Pushing and Popping
var arr = [];
arr.push("Dhruv");
arr.push(1);
arr.push(2);
arr.push("Shagun");
arr.push(3);
arr.push("Ghazal");
arr.push(4);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);
