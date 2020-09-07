import express from "express";
const  app     = express();

const port = 8080; // default
app.get("/", (req, res) => {
  res.send("Welcome to QuInventory");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started on at http://localhost:${port}`);
});