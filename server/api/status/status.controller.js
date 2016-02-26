'use strict'

import * as _ from 'lodash';

import utils from '../../utils/utils';
import dummy from './status.dummy';
import config from '../../config';

/**
 * Returns a sarcastic status for *item*.
 * 
 * @param {Object} item
 * @return {String}
 */
function getStatusOfItem(item) {
  return _.every([
    _.get(item, 'events.length') < 2,
    !_.get(item, 'events.length') || /inga större störningar/i.test(_.get(item, 'events[0].message'))
  ])
  ? 'För en gångs skull verkar faktiskt något funka.'
  : 'Så klart nånting är fel.';
}

/**
 * ROUTE GET '/api/status'
 */
export const get = (req, res) => {
  
  utils.get(config.trafficUrl.replace('{key}', config.trafficKey))
  .then((data) => {
    // Handle the response somewhat
    let trafficData = _.chain(_.get(data, 'ResponseData.TrafficTypes'))
      .map((item) => { return {
        name: item.Name,
        type: item.type,
        events: _.map(item.Events, (event) => { return {
          message: event.Message,
          line: event.TrafficLine
        }; })
      }; })
      .map((item) => _.assign({}, item, {
        status: getStatusOfItem(item)
      }))
      .value();
    
    res.status(200).json(trafficData);
  })
  .catch((err) => {
    utils.handleError(err, res);
  })
  
};

export default {
  get: get
};


