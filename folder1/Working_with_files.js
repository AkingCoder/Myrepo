// const fs = require("fs")
// console.log("Starting");
// fs.writeFile("Heading.txt","Hello my dear",()=>{
//     fs.readFile("Heading.txt",(error,data)=>{
//         console.log(data.toString())
//     })
// })
// console.log("Ending");
// import fs from "fs/promises"
// let b = await fs.appendFile("Heading.txt","This is a Amazing Promise")
// let a = await fs.readFile("Heading.txt")
// console.log("Done");
// console.log(a.toString());
import path from "path"
let a = "E:\\Full stack web developer\\Node_js\\Heading.txt"
console.log(path.extname(a))
console.log(path.dirname(a))
console.log(path.basename(a))



