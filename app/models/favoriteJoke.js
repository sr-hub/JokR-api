const mongoose = require('mongoose')

const favoriteJokeSchema = new mongoose.Schema({
  isThirdParty: {
    type: Boolean,
    required: true
  },
  joke: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Joke',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('favoriteJoke', favoriteJokeSchema)
