const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  nationality: { type: String },
  birthYear:   { type: Number }
});

module.exports = mongoose.model('Actor', ActorSchema);