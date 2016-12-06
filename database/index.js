const mongoose = require('mongoose')
const colors = require('colors')
const getPackageVersion = require('../functions').getPackageVersion

// Note that the MONGO_CONNECTION_STRING variable below is pulled from a folder not tracked by git…
// If you would like to use something like this, you will need to input
// your own mongo conenction string information in the variable below. You could also
// use process.env variables (environment variables)
const MONGO_CONNECTION_STRING = require('../private/mongo-config')         // something like "mongodb://user-goes-here:password-goes-here@localhost:27017/database-goes-here"


// Startup sequence for MongoDB. It queries the MongoDB version and returns
// it from the relevant characters from the query's return;
// otherwise it returns the error if it's unsuccessful
module.exports = function connectDb() {
  mongoose.connect(MONGO_CONNECTION_STRING, (err) => {
    if (!err) {
      return new mongoose.mongo
        .Admin(mongoose.connection.db)
        .buildInfo((error, info) => console.log(
          colors.cyan(
            'Successfully connected to Mongodb',
            info.version,
            '   -   via Mongoose',
            getPackageVersion('mongoose'))))
    }

    return console.log(
      colors.red(
        'Unable to connect to Mongodb using Mongoose',
        getPackageVersion('mongoose'),
        '  |  ',
        err))
  })
}
