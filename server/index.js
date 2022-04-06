// console.log("Implement servermu disini yak 😝!");
// server is working just fine, but there's a bit of issue regarding to svg files.

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const port = 8000;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Page not found ...");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    let reqUrl = req.url;
    switch (reqUrl) {
      case "/" || "":
        reqUrl = "/index.html";
        break;
      case "/sewaMobil":
        reqUrl = "/cariMobil.html";
        break;
      default:
        reqUrl = req.url;
        break;
    }
    const parseURL = url.parse(reqUrl);
    const pathName = `${parseURL.pathname}`;
    const extension = path.parse(pathName).ext;
    const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);

    const contentTypes = {
      ".css": "text/css",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".svg" : "image/svg+xml",
      ".html": "text/html",
      ".js": "text/javascript",
    };

    fs.exists(absolutePath, (exists) => {
      if (!exists) {
        res.writeHead(404);
        res.end("File not found ...");
        return;
      }
    });

    fs.readFile(absolutePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("File not found ...");
      } else {
        res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
        res.end(data);
      }
    });
  })

  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  })




