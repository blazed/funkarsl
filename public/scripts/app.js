'use strict'

import '../style/main.scss'
import 'lodash';
import Vue from 'vue';

import Status from './components/status/status';
import StatusBar from './components/status-bar/status-bar';

import utils from './utils';

const app = new Vue({
  el: '#app',
  components: {
    'status': Status,
    'status-bar': StatusBar
  },
  data: {
    status: 'Nej',
    statusArr: [
      {
        type: 'Tunnelbana',
        val: 'Nånting'
      },
      {
        type: 'Pendeltåg',
        val: 'Något annat'
      }
    ],
    created: () => {
      console.log('Component created.');
    }
  }
});

utils.get('/api/status')
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});