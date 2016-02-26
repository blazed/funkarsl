'use strict'

import Vue from 'vue';
import template from './status.html';

const StatusComponent = Vue.extend({
  template,
  props: {
    status: String
  }
});

export default StatusComponent;

