import express from "express"
const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("Hello World!")
})
app.get('/Home',(req,res)=>{
    res.send("Hello Home!")
})
app.use(express.static("public"))

app.listen(port,()=>{
    console.log(`Example of app listening on port ${port}`)
})
