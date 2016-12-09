/* eslint-disable no-shadow */
const mongoose = require('mongoose')
const colors = require('colors')
const getPackageVersion = require('../functions').getPackageVersion
const dummyData = require('./dummyData')
const Location = require('../database/models/location')

// Note that the MONGO_CONNECTION_STRING variable below is pulled from a folder not tracked by git…
// If you would like to use something like this, you will need to input
// your own mongo conenction string information in the variable below. You could also
// use process.env variables (environment variables)
const MONGO_CONNECTION_STRING = require('../private/mongo-config')         // something like "mongodb://user-goes-here:password-goes-here@localhost:27017/database-goes-here"


// Startup sequence for MongoDB. It will check the locations collection
// and populate some dummy data if it's empty.
// It then queries the MongoDB version and returns
// it (to log it from the console) from the relevant characters from the query's return;
// otherwise it returns the error if it's unsuccessful
module.exports = function connectDb() {
  mongoose.connect(MONGO_CONNECTION_STRING, (err) => {
    if (!err) {
      const connection = new mongoose.mongo
        .Admin(mongoose.connection.db)
        .buildInfo((error, info) => console.log(
          colors.cyan(
            'Successfully connected to Mongodb',
            info.version,
            '   -   via Mongoose',
            getPackageVersion('mongoose'))))
      Location.count({}, (err, count) => {
        console.log('before the ifs')
        if (!count) {
          console.log('none found, so I should insert')
          Location.collection.insert(dummyData[0])
          Location.collection.insert(dummyData[1])
          Location.collection.insert(dummyData[2])
          Location.collection.insert(dummyData[3])
          Location.collection.insert(dummyData[4])
          Location.collection.insert(dummyData[5])
          Location.collection.insert(dummyData[6])
          Location.collection.insert(dummyData[7])
          Location.collection.insert(dummyData[8])
          Location.collection.insert(dummyData[9])
          console.log('I should have inserted')
        } else {
          console.log('apparently I found something')
        }
      })
      return connection
    }

    return console.log(
      colors.red(
        'Unable to connect to Mongodb using Mongoose',
        getPackageVersion('mongoose'),
        '  |  ',
        err))
  })
}
