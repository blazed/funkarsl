'use strict'

export default {
  disturbancesKey: process.env.SL_DISTURBANCES_2 || '',
  disturbancesUrl: 'http://api.sl.se/api2/deviations.json?key={key}',
  trafficKey: process.env.SL_TRAFFIC_2 || '',
  trafficUrl: 'http://api.sl.se/api2/trafficsituation.json?key={key}'
};