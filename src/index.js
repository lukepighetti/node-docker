const http = require("http");

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.write("Hello world!!!!!");
    res.end();
  })
  .listen(PORT, error => {
    if (error) {
      console.error(error);
    }
    console.log(`Listening on port ${PORT}`);
  });
