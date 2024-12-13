//const express = require("express"); //CommonJS
import express from "express"; //ES6
import router from "./router";

const app = express();

app.use("/", router);

export default app;
