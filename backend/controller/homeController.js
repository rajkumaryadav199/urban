const express=require("express")
const asyncHandler=require('express-async-handler')

const HomeData  =require("../models/homeModel")

// get data for home page
const HomeProductController=asyncHandler(async(req, res)=>{
    
    const homedata = await HomeData.find()
    res.status(200).json(homedata)
})

// post data for home page
const HomeAdd=asyncHandler(
    async(req, res)=>{
    console.log(req)
    if(!req.body)
    {
        res.status(400)
        throw new Error( "Add the data")
    }
    const data=await HomeData.create(req.body)
    res.status(200).json({status:'ok', data:data})

}
)
/*
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

}*/
module.exports={HomeProductController , HomeAdd}