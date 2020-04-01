var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

//ルーティング設定
app.get('/thanks', function (req, res) {
  res.send('Thank you!! 登録ありがとう！！');
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);