// const express = require("express");
// const App = express();
import dotenv from "dotenv";
import express from "express";
import database from "./database.js";
console.log(database);
import cors from "cors";
//
console.log(dotenv.config());
let app = express();

app.get("/blogApi", (req, res) => {
  res.status(200).json({ message: "successfully", database });
});


app.listen(process.env.port, () => {
  console.log("listening on port " + process.env.port);
});

