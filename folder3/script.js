const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.send("Hello World")
})
app.get('/nav', (req, res) => {
    let site_name = "HackPro"
    let search = "Search Now"
    let arr = ["Anand","Saurav","Nikhil"]
  res.render('index',{site_name:site_name,search:search,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})