const express = require("express")
const { HomeProductController, HomeAdd } = require("../controller/homeController")
const dotenv = require("dotenv").config()
const router=express.Router()
// const {getproduct,setproduct,updateproduct,deleteproduct} =require('../controller/Productcontroller')

router.route("/").get(HomeProductController)
router.route("/").post(HomeAdd)


// router.get("/",getProduct) 

// router.post("/",setProduct) 

// router.put("/:id",updateProduct ) 

// router.delete("/:id",deleteProduct ) 

module.exports=router