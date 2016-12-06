function ApiRoutes(router) {
  router.get('/api/location/listview', (req, res) => res.status(200).json(
    [
      'ChIJW2wi48ZzhlQRMrotX09z9xw',
      'ChIJ2xyFx-FzhlQR7AmrwU4HwFk',
      'ChIJbW0YnsdzhlQR2mtc9pcWMWw',
      'ChIJP2FxnsdzhlQRtGPPIr583EQ',
      'ChIJx_AshMdzhlQRNYTKRxzKHGE',
      'ChIJ5Qg8CcdzhlQRLVzT-a95-FA',
      'ChIJh_Vsb8dzhlQRo3zWwxVDwbI',
      'ChIJFfDeDsdzhlQRqU3zGHTmMuk',
      'ChIJVTbKnMdzhlQR2eJyHFphPec',
      'ChIJk5Qv1cdzhlQRC9m9Hes_il8',
    ]
))
}

module.exports = ApiRoutes
