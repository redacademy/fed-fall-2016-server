/* eslint-disable max-len */
const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  placeId: {
    type: String,
    unique: true,
    required: false,    // we might want to change this to true, depending on our Google integration
  },
  loc: {
    lng: {
      type: String,
    },
    lat: {
      type: String,
    },
    unique: false,
    required: true,
  },
  ratingSummary: {
    quality: {
      type: Number,
      min: 1,
      max: 3,
    },
    clean: {
      type: Number,
      min: 1,
      max: 3,
    },
    nursing: {
      type: Number,
      min: 1,
      max: 3,
    },
    quiet: {
      type: Number,
      min: 1,
      max: 3,
    },
  },
  rating: [{
    userId: {
      type: String,
      unique: true,
    },
    quality: {
      type: Number,
      min: 1,
      max: 3,
    },
    clean: {
      type: Number,
      min: 1,
      max: 3,
    },
    nursing: {
      type: Number,
      min: 1,
      max: 3,
    },
    quiet: {
      type: Number,
      min: 1,
      max: 3,
    },
  }],
  createdBy: {
    type: String,
    required: true,
    unique: false,
  },
  createdAt: {
    type: Date,
    unique: false,
  },
  modifiedAt: {
    type: Date,
    unique: false,
  },
  mapPin: {
    type: String,
    required: false,
  },
})

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location
