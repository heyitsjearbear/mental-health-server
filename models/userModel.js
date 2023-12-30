const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Journal = require('./journalModel');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  journals: [Journal.schema],
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
  
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

module.exports = mongoose.model("User", userSchema);
