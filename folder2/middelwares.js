const express = require("express")
const app = express()
const port = 3000
const blog = require("./routers/blog.js")
const fs = require("fs")
app.use("/blog",blog)
app.use((req,res,next)=>{
    fs.appendFileSync("logDetail.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}` )
    req.anand = "I am Anand"
    next()
})  
app.use((req,res,next)=>{
    console.log("m2")
    next()
})
app.get('/',(req,res)=>{
    res.send("Hello World " + req.anand)
})
app.get('/Home',(req,res)=>{
    res.send("Hello World")
})
app.listen(port)