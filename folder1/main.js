// Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8000;

// // Create HTTP server
// const server = http.createServer(function (req, res) {
//   // Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // Send the response body "Hello World"
//   res.end("<h1>Hello World</h1>");
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// import {a,b,c,d,e} from "./library.js"
// console.log(a,d)
const a = require("./library.js")
console.log(a);