// required
var babel = require("babel-core");
var express = require('express');
// create app
var app = express();
const PORT = process.env.PORT || 3000;
//
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname+req.url);
  } else {
    next();
  }
});
//
app.use(express.static('build'));
//
app.listen(PORT, function() {
  console.log('Express Server is Up @ port ' + PORT);
});
