const express = require('express')
const resolve = require('path').resolve
const cors = require('cors')
const colors = require('colors')
const getPackageVersion = require('./functions').getPackageVersion
const mongooseDb = require('./database/')
const bodyParser = require('body-parser')

const port = 80

const app = express()
const router = express.Router({ mergeParams: true })
router.use(bodyParser.json())

mongooseDb()                   // connect to Mongo database

app.use(express.static(resolve(process.cwd(), 'public')))
app.use(cors({ origin: ['http://localhost:3000'], credentials: true })) // for testing from development computer
app.use(router)

/*
 * GET ROUTES
 */
require('./api-routes/GET/location')(router)
require('./api-routes/GET/locationListview')(router)
require('./api-routes/GET/locationNear')(router)
require('./api-routes/GET/locationNearBetter')(router)

/*
 * POST ROUTES
 */
require('./api-routes/POST/locationNew')(router)
require('./api-routes/POST/locationRatingAdd')(router)


app.use((req, res, next) => {
  res.status(404).send('Route not jelly :(')
  next()
})

app.listen(port, () => {
  console.log('\n\n')
  console.log(colors.bgBlack('Running', colors.cyan('Express', getPackageVersion('express')), 'on top of', colors.cyan('Node', process.version)))
  console.log(colors.bgBlack('Started:', new Date()))
  console.log(colors.cyan('Express server is running on port', colors.bgCyan.black(port)))
})
