const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.get('/api/location/near/better/:lng/:lat', (req, res) => {
    Location.geoNear(
      {
        type: 'Point',
        coordinates: [parseFloat(req.params.lng), parseFloat(req.params.lat)]
      },
      {
        distanceField: 'dist.calculated',
        num: 10,
        spherical: true
      },
      (err, locations) => {
        // TODO - refactor mongoose query to omit 'rating' array
        // unfortunately, geoNear doesn't permit the manual inclusion/exclusion
        // of fields, so might need to use $near, which might necessitate
        // changing the type of index on the 'loc' field
        if (err) {
          console.log(err)
        }

        const locationStripped = locations.map((location) => {
          delete location['obj']['rating']
          delete location['obj']['createdBy']
          return location
        })

        console.log(locationStripped)

        res.status(200).json(locationStripped)

        // const locationStripped = locations.map((location) => {
        //   delete location['rating']
        // })



        // res.status(200).json(locationStripped)
      })
  })
}

module.exports = ApiRoutes
