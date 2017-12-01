var express = require('express');
var app = express();
app.all('*', function (req, res, next) { // 解决浏览器不同端口的跨域问题
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200); /// 让options请求快速返回/
  }
  else {
    next();
  }
})


var user = require('./user')
var activity = require('./activity');
var shop = require('./shop');

shop(app);
activity(app);
user(app);

app.listen(3000, function () {
  console.log('3000 listening...');
});
