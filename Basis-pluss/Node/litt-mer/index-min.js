const http = require("http");
require("./config");

const server = http.createServer((req, res) => {

res.write("<h1> Kamran´s first node application</h1>");
res.end();
});
server.listen(process.env.PORT);
