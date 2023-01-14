const mongoose = require("mongoose");

module.exports = () => {
  return  mongoose.connect("mongodb+srv://urban:urban-123@urban.mzd332o.mongodb.net/urban?retryWrites=true&w=majority");
  // return mongoose.connect("mongodb+srv://saikiran11471:saikiran11471@cluster0.b1mxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
///mongodb+srv://Saniya:saniya@cluster0.7im7o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://saniya:saniya_143@cluster0.2rll2j3.mongodb.net/?retryWrites=true&w=majority
 