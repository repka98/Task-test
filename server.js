var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendfile('../www/index.html');
});

app.listen(8000);
console.log('Сервер стартовал!');