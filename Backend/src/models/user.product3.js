const mongoose = require("mongoose");
// const autenticate=require("../middlewares/autanticate")

const productSchema3 = new mongoose.Schema(
  {
    id: {type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  },

);

module.exports=mongoose.model("product3",productSchema3)