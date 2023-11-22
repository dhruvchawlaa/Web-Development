import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("I am Dhruv Chawla and I love to play music.");
});

app.get("/contact", (req, res) => {
  res.send("You can contact me at <a href='mailto:dhruvv.chawlaa@gmail.com'>dhruvv.chawlaa@gmail.com</a>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
