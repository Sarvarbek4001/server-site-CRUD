const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/node",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connected succesfully");
    } else {
      console.log("Error is db connection " + err);
    }
  }
);
require("./employee.model");
