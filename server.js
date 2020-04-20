const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const compression = require('compression');
const port = process.env.PORT || 8080;
const app = express();
app.use(compression());


app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
};

app.use(favicon(__dirname + "/dist/favicon.ico"));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port);
