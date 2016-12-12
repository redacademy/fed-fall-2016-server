function ApiRoutes(router) {
  router.get('/api/location', (req, res) => res.status(200).json(
    [
      { location: { lat: 49.26363504526748, long: -123.1346331524229 }, placeid: 'ChIJW2wi48ZzhlQRMrotX09z9xw', mapPin: 'diaper' },
      { location: { lat: 49.26327075476226, long: -123.1334386649043 }, placeid: 'ChIJ2xyFx-FzhlQR7AmrwU4HwFk', mapPin: 'bottle' },
      { location: { lat: 49.26340736541866, long: -123.1379649641988 }, placeid: 'ChIJbW0YnsdzhlQR2mtc9pcWMWw', mapPin: 'diaper' },
      { location: { lat: 49.26341516675726, long: -123.1383673685654 }, placeid: 'ChIJP2FxnsdzhlQRtGPPIr583EQ', mapPin: 'bottle' },
      { location: { lat: 49.26336347313966, long: -123.1395691680608 }, placeid: 'ChIJx_AshMdzhlQRNYTKRxzKHGE', mapPin: 'diaper' }
    ]))
}

module.exports = ApiRoutes
