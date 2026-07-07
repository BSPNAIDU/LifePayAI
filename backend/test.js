const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/lifepayai";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Local MongoDB Connected Successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });