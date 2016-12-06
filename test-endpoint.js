/* eslint-disable */

function ApiRoutes(router) {
  router.get('/api/location', (req, res) => res.status(200).json(
    [
      { location: { long: 49.26363504526748, lat: -123.1346331524229 }, placeid: 'ChIJW2wi48ZzhlQRMrotX09z9xw', mapPin: 'diaper' },
      { location: { long: 49.26327075476226, lat: -123.1334386649043 }, placeid: 'ChIJ2xyFx-FzhlQR7AmrwU4HwFk', mapPin: 'bottle' },
      { location: { long: 49.26340736541866, lat: -123.1379649641988 }, placeid: 'ChIJbW0YnsdzhlQR2mtc9pcWMWw', mapPin: 'diaper' },
      { location: { long: 49.26341516675726, lat: -123.1383673685654 }, placeid: 'ChIJP2FxnsdzhlQRtGPPIr583EQ', mapPin: 'bottle' },
      { location: { long: 49.26336347313966, lat: -123.1395691680608 }, placeid: 'ChIJx_AshMdzhlQRNYTKRxzKHGE', mapPin: 'diaper' },
    ]))
}

module.exports = ApiRoutes;



// const apiRouter = require('express').Router({ mergeParams: true })
// // const Locations = require('../models/location')
// // const cors = require('cors')
// // const User = require('./models/user')
// module.exports = function apiRoutes() {
//   // apiRouter.use(cors({
//   //   origin: ['http://localhost:3000'],
//   //   credentials: true,
//   // }))
//   apiRouter.get('/api/location', (req, res) => res.status(200).json(
//     [
//       { location: { long: 49.26363504526748, lat: -123.1346331524229 }, placeid: 'ChIJW2wi48ZzhlQRMrotX09z9xw', mapPin: 'diaper' },
//       { location: { long: 49.26327075476226, lat: -123.1334386649043 }, placeid: 'ChIJ2xyFx-FzhlQR7AmrwU4HwFk', mapPin: 'bottle' },
//       { location: { long: 49.26340736541866, lat: -123.1379649641988 }, placeid: 'ChIJbW0YnsdzhlQR2mtc9pcWMWw', mapPin: 'diaper' },
//       { location: { long: 49.26341516675726, lat: -123.1383673685654 }, placeid: 'ChIJP2FxnsdzhlQRtGPPIr583EQ', mapPin: 'bottle' },
//       { location: { long: 49.26336347313966, lat: -123.1395691680608 }, placeid: 'ChIJx_AshMdzhlQRNYTKRxzKHGE', mapPin: 'diaper' },
//     ]))
//   apiRouter.get('/api/location/listview', (req, res) => res.status(200).json(
//     [
//       'ChIJW2wi48ZzhlQRMrotX09z9xw',
//       'ChIJ2xyFx-FzhlQR7AmrwU4HwFk',
//       'ChIJbW0YnsdzhlQR2mtc9pcWMWw',
//       'ChIJP2FxnsdzhlQRtGPPIr583EQ',
//       'ChIJx_AshMdzhlQRNYTKRxzKHGE',
//       'ChIJ5Qg8CcdzhlQRLVzT-a95-FA',
//       'ChIJh_Vsb8dzhlQRo3zWwxVDwbI',
//       'ChIJFfDeDsdzhlQRqU3zGHTmMuk',
//       'ChIJVTbKnMdzhlQR2eJyHFphPec',
//       'ChIJk5Qv1cdzhlQRC9m9Hes_il8',
//     ],
//   ))
//   apiRouter.get('/api/location/details', (req, res) => res.status(200).json(
//   ))
//   return apiRouter
// }
