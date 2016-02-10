'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes')(app);

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('App listening on %s on port %s', host, port);
})
