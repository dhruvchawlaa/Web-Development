const fs = require("fs");

// Writing into a file
fs.writeFile("message.txt", "Hello from nodeJS!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// Reading from a file
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
