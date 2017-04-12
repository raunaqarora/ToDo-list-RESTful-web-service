const express = require('express');
  app = express();
  port = parseInt(process.env.PORT, 10) || 8000;
//mongoose = require('mongoose'),
const logger = require('morgan');
const bodyParser = require('body-parser');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'You seemed to have lost your way',
}));

app.listen(port);
/*app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});*/
console.log('RESTful API server started on: ' + port);
