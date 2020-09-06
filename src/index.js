const express = require("express");
const app     = express();

const port    = 8080; //default
app.get("/", (req, res) => {
  res.send("Welcome to QuInventory");
});

app.listen(port, () => {
  console.log(`server started on at http://localhost:${port}`);
});