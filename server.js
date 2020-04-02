var express = require('express');
const basicAuth = require('basic-auth-connect');
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

// basic auth
app.use(basicAuth('to-nen', 'to-nen-test'));

//ルーティング設定
app.get('/thanks', function (req, res) {
  res.send('Thank you!! 登録ありがとう！！');
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);