require("./models/db");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const employeeController = require("./controllers/employeeController");
const app = express();
app.set("views", path.join(__dirname, "/views/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.use("/employee", employeeController);

app.listen(5000, () => {
  console.log("Server has been started on the port of 5000...");
});
