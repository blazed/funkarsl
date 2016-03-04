'use strict'

import Promise from 'bluebird';
import { ajax } from 'jquery';

export const get = (url, options) => {
  return new Promise((resolve, reject) => {
    ajax({
      url: url,
      type: 'GET',
      success: resolve,
      error: (err) => {
        reject(new Error(
          !!err.responseBody
            ? err.responseBody
            : err.responseText
          ));
      },
    })
  });
};

export default {
  get: get
};
