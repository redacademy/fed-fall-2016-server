const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.get('/api/location/near/:lng/:lat', (req, res) => {
    Location.geoNear(
      {
        type: 'Point',
        coordinates: [parseFloat(req.params.lng), parseFloat(req.params.lat)]
      },
      {
        distanceField: 'dist.calculated',
        includeLocs: 'dist.location',
        num: 10,
        spherical: true
      }, (err, locations) => {
        // TODO - refactor mongoose query to omit rating array and just return
        // the ratingSummary nested document instead
        console.log(err)
        res.status(200).json(locations)
      })
  })
}

module.exports = ApiRoutes
