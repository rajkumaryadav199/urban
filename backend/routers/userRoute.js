const express = require('express')
const router =  express.Router()
const {registerUser,loginUser } = require('../controller/Usercontroller')
// const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
// router.get("/profile",  )
 
module.exports = router