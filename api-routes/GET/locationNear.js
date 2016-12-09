const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.get('/api/location/near/:lat/:lng', (req, res) => {
    Location.find({}, (err, locations) => {
      res.status(200).json(locations)
    })
  })
}

module.exports = ApiRoutes
