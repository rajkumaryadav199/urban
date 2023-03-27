const express=require("express")
const { getTshirt, setTshirt, updateTshirt, deleteTshirt } = require("../controller/Tshirtcontroller")
const dotenv= require("dotenv").config()


const router=express.Router()

router.route("/").get(getTshirt)

router.route("/").post(setTshirt)

router.route("/:id").put(updateTshirt).delete(deleteTshirt)

module.exports=router