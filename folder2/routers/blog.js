const express = require("express")
const router = express.Router()
 
router.use((req,res,next)=>{
    console.log("I am in blog")
    next()
})
router.get('/',(req,res)=>{
    res.send("Hello Blog ")
})
router.get('/Home',(req,res)=>{
    res.send("Hello Blog Home")
})
module.exports = router 