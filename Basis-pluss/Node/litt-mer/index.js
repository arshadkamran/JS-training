var normalContent = "<h1> Kamran´s first node application</h1>";
var loginContent = "<h1> Login </h1>";
const http = require("http");
require("./config");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(method, url);

    if(url === "/") {
        res.write(normalContent);
        res.end();
    } else if (url === "/login") {
        res.write(loginContent);
        res.end();

    }

});
server.listen(process.env.PORT);