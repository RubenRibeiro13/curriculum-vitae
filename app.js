const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let requestFlag = false;
let viewportWidth = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  if (requestFlag === false) {
    requestFlag = true;
    res.redirect("/request");
  }
  else {
    if (viewportWidth > 832) {
      res.sendFile(__dirname + "/success.html");
      requestFlag = false;
    }
    else {
      res.sendFile(__dirname + "/failure.html");
      requestFlag = false;
    }
  }
});

app.get("/request", function(req, res) {
  res.sendFile(__dirname + "/request.html");
});

app.post("/request", function(req, res) {
  viewportWidth = req.body.viewport_width / 1;
  res.redirect("/");
});

app.listen(process.env.PORT || 3000);
