'use strict'

var express = require('express');
var path = require('path');

var root = path.resolve();

module.exports = function (app) {
  // Front end stuff
  app.use(express.static(root + '/public'));
  
  // Back end stuff
}
