const express = require("express")
const {getProduct,setProduct,updateProduct,deleteProduct, getOneProduct, getAllProducts} = require("../controller/Productcontroller")

const dotenv = require("dotenv").config()
const router=express.Router()
// const {getproduct,setproduct,updateproduct,deleteproduct} =require('../controller/Productcontroller')

 router.route("/newarrival").get(getProduct)
router.route("/newarrival").post(setProduct)
router.route("/newarrival/:id").delete(deleteProduct).put(updateProduct)
router.route("/newarrival/:id").get(getOneProduct)
//router.route("/newarrival").get(getAllProducts)



// router.get("/",getProduct) 

// router.post("/",setProduct) 

// router.put("/:id",updateProduct ) 

// router.delete("/:id",deleteProduct ) 

module.exports=router
