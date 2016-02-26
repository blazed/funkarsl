'use strict'

import Vue from 'vue';
import template from './status-bar.html';

const StatusBarComponent = Vue.extend({
  template,
  props: {
    statusArr: Array
  }
});

export default StatusBarComponent;
