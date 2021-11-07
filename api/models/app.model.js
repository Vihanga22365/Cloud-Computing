const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  age: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model("App", AppSchema);
