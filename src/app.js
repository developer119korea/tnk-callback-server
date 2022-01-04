var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(9000, function () {
  console.log("start! express server on port 9000");
});

app.post('/callback', function (req, res) {
  console.log(`callback data :  ${JSON.stringify(req.body)}`);
  res.json({
    state: 200
  })
});