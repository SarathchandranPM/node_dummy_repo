const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Our short history");
    return;
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't find the page you're looking for</p> <a href="/">Back to home</a>`);
});

server.listen(5000);
