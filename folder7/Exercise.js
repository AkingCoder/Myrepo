import mongoose from "mongoose"
import express from "express"
import {dummy} from "./models/Dummy_data.js"
let conn = await mongoose.connect("mongodb://localhost:27017/Dummy")
const app = express()
const port = 3000
app.set('view engine','ejs')

app.get('/', (req, res) => {
    // const Dummy = new dummy({name:nm[rnd_1],salary:sl[rnd_2],language:lg[rnd_3],city:ct[rnd_4],isManager:mg[rnd_5]})
    // Dummy.save()
    res.render("index")
})
app.get('/generate', async(req, res) => {
    await dummy.deleteMany({})
    for (let index = 0; index < 10; index++) {
        let rnd_1 = Math.floor(Math.random()*9)
        let rnd_2 = Math.floor(Math.random()*9)
        let rnd_3 = Math.floor(Math.random()*9)
        let rnd_4 = Math.floor(Math.random()*9)
        let rnd_5 = Math.floor(Math.random()*2)
        let nm =["Harry","Sohan","Sita","Ram","Kiara","Anand","Rasika","Soniya","Jhon"]
        let sl =["52000","60000","20000","100000","40000","120000","105000","70000","75000"]
        let lg =["Python","C","JavaScript","Ruby","C#","C++","PHP","HTML","CSS"]
        let ct =["Puducherry","Jaipur","Ahamdabad","Chennai","Kolkata","Hyderabad","Bengaluru","Mysuru","New Delhi"]
        let mg =[true,false]
        const Dummy = await dummy.create({name:nm[rnd_1],salary:sl[rnd_2],language:lg[rnd_3],city:ct[rnd_4],isManager:mg[rnd_5]})
        
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
