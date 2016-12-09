/* eslint-disable max-len */
const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  placeId: { type: String, unique: true, required: false },
  loc: {
    lng: { type: String, unique: false, required: true },
    lat: { type: String, unique: false, required: true },
  },
  ratingSummary: {
    totalRaters: { type: Number, required: true },
    quality: { type: Number, required: true },
    clean: { type: Number, required: true },
    nursing: { type: Number, required: true },
    quiet: { type: Number, required: true },
  },
  rating: [{
    userId: { type: String, unique: true, required: true },
    quality: { type: Number, min: 1, max: 3, required: true },
    clean: { type: Number, min: 1, max: 3, required: true },
    nursing: { type: Number, min: 1, max: 3, required: true },
    quiet: { type: Number, min: 1, max: 3, required: true },
  }],
  createdBy: { type: String, required: true, unique: false },
  createdAt: { type: Date, unique: false, required: true },
  mapPin: { type: String, required: true },   // this will need a function to determine what pin to use
  amenities: {
    changeTable: { type: Boolean, default: false },
    keyRequired: { type: Boolean, default: false },
    nursingRoom: { type: Boolean, default: false },
    private: { type: Boolean, default: false },
    strollerAccessible: { type: Boolean, default: false },
    washroomMen: { type: Boolean, default: false },
    washroomFamily: { type: Boolean, default: false },
    washroomWomen: { type: Boolean, default: false },
  },
})

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location
