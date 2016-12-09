const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.post('/api/location/new', (req, res) => {
    // const { amenities } = req.body
    console.log(req.body)
    // console.log("*******************************HERE IS THE START OF THE REQUEST")
    // console.log(req)
    // console.log("*******************************HERE IS THE END OF THE REQUEST")

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




    // Location.update({
    //   ratingSummary: {
    //     totalRaters: totalRaters++,
    //     quality: quality +

    //     }
    // })
    console.log('I MADE IT!!!!')
    res.status(200).send('I LOVE YOU')
  })
}

module.exports = ApiRoutes
