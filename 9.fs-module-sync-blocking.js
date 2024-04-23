const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
    return;
  }
  if (req.url === "/about") {
    // Now assume you have some blocking code in the about page:
    for (let i = 0; i < 300; i++) {
      for (let j = 0; j < 300; j++) {
        console.log(`${i} : ${j}`);
      }
    }
    res.end("About page");
    return;
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
