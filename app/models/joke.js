const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  //  favorited: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'FavoriteJoke',
  //   required: true
  // }
}, {
  timestamps: true
})

module.exports = mongoose.model('Joke', jokeSchema)
