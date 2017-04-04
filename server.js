var express = require("express"),
    app = express(),
    port = process.env.PORT || 300;

app.listen(port);

console.log('RESTful API server started on: ' + port);
