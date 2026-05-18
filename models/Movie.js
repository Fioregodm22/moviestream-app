const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  year:     { type: Number, required: true },
  genre:    { type: String, required: true },
  budget:   { type: Number },
  studio:   { type: String },
  runtime:  { type: Number },
  views:    { type: Number, default: 0 },
  awards:   { type: Number, default: 0 },
  actors:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  createdAt:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', MovieSchema);