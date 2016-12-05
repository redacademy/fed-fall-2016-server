/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    unique: false,
    required: false,
  },
  lastName: {
    type: String,
    unique: false,
    required: false,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  faves: [],
  reviewed: [],
})

UserSchema.methods.checkPassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, match) => {
    if (match) {
      cb(null, match)
    } else {
      cb(err)
    }
  })
}

UserSchema.pre('save', function (next) {
  // encrypt password before saving
  if (this.isModified('password') || this.isNew) {
    // generate salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err)
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err)
        this.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
