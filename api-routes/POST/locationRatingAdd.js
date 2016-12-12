const Location = require('../../database/models/location')

function ApiRoutes(router) {
  router.post('/api/location/:placeId/rating/add', (req, res) => {
    const { rating } = req.body
    Location.findOneAndUpdate(
      { placeId: req.params.placeId },
      {
        $push: { rating },

        $inc: {
          'ratingSummary.totalRaters': 1,
          'ratingSummary.quality': rating.quality,
          'ratingSummary.clean': rating.clean,
          'ratingSummary.nursing': rating.nursing,
          'ratingSummary.quiet': rating.quiet
        }
      }, (err) => {
        if (err) {
          console.log(err)
          return res.status(500).send('You\'ve done it again, Virginia')
        }

        return res.status(200).send('I LOVE YOU')
      })
  })
}

module.exports = ApiRoutes
