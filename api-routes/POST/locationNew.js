const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.post('/api/location/new', (req, res) => {
    console.log(req.body)

    const { placeId, loc, rating, createdBy, mapPin, amenities } = req.body
    Location.create(
      {
        placeId,
        loc,
        rating: {
          userId: createdBy,
          quality: rating.quality,
          clean: rating.clean,
          nursing: rating.nursing,
          quiet: rating.quiet,
        },
        createdBy,
        mapPin,
        createdAt: new Date(),
        modifiedAt: new Date(),
        amenities,
        ratingSummary: {
          totalRaters: 1,
          quality: rating.quality,
          clean: rating.clean,
          nursing: rating.nursing,
          quiet: rating.quiet,
        },
      })

    console.log('I MADE IT!!!!')
    res.status(200).send('I LOVE YOU')
  })
}

module.exports = ApiRoutes
