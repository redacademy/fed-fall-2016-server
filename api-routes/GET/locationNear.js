const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.get('/api/location/near/:lng/:lat', (req, res) => {
    console.log(req.params)
    Location.geoNear(
      {
        type: 'Point',
        coordinates: [parseFloat(req.params.lng), parseFloat(req.params.lat)]
      },
      {
        distanceField: 'dist.calculated',
        includeLocs: 'dist.location',
        num: 10,
        spherical: true,
      }, (err, locations) => {
        res.status(200).json(locations)
      })
  })
}

module.exports = ApiRoutes
