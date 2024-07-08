"use strict";
/* -------------------------------------------------------
                        PIZZA API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const ToppingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  { collection: "topings", timestamps: true }
);

module.exports = mongoose.model("Topping", ToppingSchema);
