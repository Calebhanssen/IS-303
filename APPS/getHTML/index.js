const express = require("express");

let app = express();

const port = 3000;

let path = require("path");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/testGet.html"));
});

app.get("/storeIt", (req, res) => {
  let sOutput;

  sOutput =
    req.query.empFirst + " " + req.query.empLast + " " + req.query.workstatus;

  res.send(sOutput);
});

app.listen(port, () => console.log("Started website"));
