const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Snyk and Jenkins integration successful!");
});

app.listen(3000, () => {
  console.log("Application running on port 3000");
});