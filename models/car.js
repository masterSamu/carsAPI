var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CarSchema = new Schema({
  brand: { type: String, required: true, maxlength: 150 },
  model: { type: String, required: true, maxlength: 150 },
  color: { type: String, required: true, maxlength: 100 },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Car", CarSchema);
