// Step 1: plain server using the built-in http module
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello");
});

server.listen(3000, () => {
  console.log("Plain http server running at http://localhost:3000");
});
