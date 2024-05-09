const express = require("express")
const blog = require("./routes/blog.js")
const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/ap",blog)
app.use(express)
app.get('/', (req, res) => {
    console.log("Get");
    res.send("Hello World!")
})
app.post('/post', (req, res) => {
    console.log("post");
    res.send("Hello post!") 
})

app.get('/my', (req, res) => {
    // console.log("index");
    res.sendFile("template/my.html", { root: __dirname })
})
app.get('/api', (req, res) => {
    // console.log("index");
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example of app listening on port ${port}`)
})