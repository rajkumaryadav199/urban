const asyncHandler = require('express-async-handler')
const Product = require("../models/productModel")
const ApiFeatures=require("../Utils/apiFeatures")
//get
const getProduct =  asyncHandler (async (req,res) =>{
  
    const products = await Product.find()
    res.status(200).json(products)
} )
 
// get one data route

const getOneProduct =  asyncHandler (async (req,res) =>{
  
    const products = await Product.findById(req.params.id)
    res.status(200).json(products)
} )
//post
const setProduct = asyncHandler (
    async (req, res)=>{
        //    console.log(req.body)
           if(!req.body) {
            res.status(400) 
            throw new Error( "plz add text")
           }
            
           const product = await Product.create(req.body)
            res.status(200).json({ status: 'ok', data: product})
        } 
) 

// update products 
const updateProduct = asyncHandler(
     async (req, res)=>{
 
 const product = await Product.findById(req.params.id)

 if(!product){
    res.status(400)
    throw new Error("Product not found")
 }

 const updateProduct = await Product.findByIdAndUpdate(req.params.id,req.body ,{
    new:true,
 })
   
    res.status(200).json(updateProduct)
}
) 
 
const deleteProduct = async (req, res)=>{
   
    const product =await Product.findById(req.params.id)
    if(!product){
        res.status(400)
        throw new Error("Product not found")
     }

     await product.remove()
    res.status(200).json({id: req.params.id})

}

const getAllProducts=asyncHandler(
   async (req, res)=>{
// pagination concept
    const perpage=20;
const productCount = await Product.countDocuments();
const apiFeatures=new ApiFeatures(Product.find(), req.query)
.search()
.filter()
// .pagination(perpage)
const products= await apiFeatures.query;
console.log("pdt:", products)
res.status(200).json({
    success:true,
     products
    })
    }
)

module.exports={
    getAllProducts,
    getOneProduct,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}