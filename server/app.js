'use strict'

import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


import routes from './routes';
routes(app);

const server = app.listen(process.env.PORT, process.env.IP, () => {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log('App listening on %s on port %s', host, port);
});
