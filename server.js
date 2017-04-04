var express = require('express'),
  app = express(),
  port = process.env.PORT || 400;

app.listen(port);

console.log('RESTful API server started on: ' + port);
