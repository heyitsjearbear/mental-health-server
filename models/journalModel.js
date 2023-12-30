const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  mood: { type: String, required: true },
});

module.exports = mongoose.model("Journal", journalSchema);
