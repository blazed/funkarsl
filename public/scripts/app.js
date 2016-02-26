'use strict'

import '../style/main.scss'
import 'lodash';
import Vue from 'vue';

import Status from './components/status/status';
import StatusBar from './components/status-bar/status-bar';

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
    ]
  }
});
