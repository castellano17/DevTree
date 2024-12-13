//const express = require("express"); //CommonJS
import express from "express"; //ES6

const app = express();

//Routing
app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
