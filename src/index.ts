import dotenv       from "dotenv";
import express      from "express";
import path         from "path";
import * as routes  from "./routes";

// initailize config
dotenv.config();

const port = process.env.SERVER_PORT;
const app  = express();

// configure app to use ejs for views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// configure app to use routes
routes.register(app);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started on at http://localhost:${port}`);
});