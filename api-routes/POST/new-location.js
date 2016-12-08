function ApiRoutes(router) {
  router.post('/api/locationnew', (req, res) => res.status(200).json(
    console.log('I look like I know what I am doing')))
}

module.exports = ApiRoutes
