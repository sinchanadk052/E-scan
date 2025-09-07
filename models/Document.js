const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  type: String,
  imagePath: String,
  data: mongoose.Schema.Types.Mixed,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Document", documentSchema);
