 const mongoose = require('mongoose')

 const productSchema = mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type:  Number, required: true },
    color:{type:String, require:true},
    size:{type:String, required:true},
    cate : {type: String, required : true},
    
},
  {
     versionKey: false,
    timestamps: true,
   },
 )

 module.exports = mongoose.model("Product",productSchema)
