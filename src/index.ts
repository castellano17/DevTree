//const express = require("express"); //CommonJS
import express from "express"; //ES6

const app = express();

//Routing
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/ecommerce", (req, res) => {
  res.send("este es el ecommerce");
});

app.get("/about", (req, res) => {
  res.send("este es el about");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is running on port, ", port);
});
