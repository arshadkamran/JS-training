console.log("Assalamu Aleikum")
//http
const http = require("http");

const server = http.createServer();



server.on("request", (req, res) => {
    console.log("Received Request");
    debugger;
    res.end("Hello Kamran, here is your http server at port 3000");

});

server.listen(3000, () => {
    console.log("The Http server is running at port 3000");

});


//2nd server with alternative code

const http2 = require("http")

const port2 = 3001

const server2 = http2.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World from port 3001\n")
})

server2.listen(port2, () => {
    debugger;
    console.log("Server running at http://localhost:" + port2 )
})