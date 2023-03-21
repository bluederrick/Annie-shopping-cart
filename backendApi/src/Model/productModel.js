import express from "express";
import mongoose from "mongoose";

let mongoose;
mongoose.schema;
const validator = mongoose.schema;

const _validator = new validator({
  product: { type: String, default: "hahaha" },
  ProductName: { type: Number, min: 18, index: true },
  rating: { type: String, match: /[0-10]/ },
  date: { type: Date, default: Date.now },
});

const productUser = mongoose.model("Model", _validator);

export default productUser;