var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var sessions = require('client-sessions')
var enforce = require('express-sslify');


require('dotenv').config()

var index = require('./routes/index');
var api = require('./routes/api');
var facebook = require('./routes/facebook');
var account = require('./routes/account');
var admin = require('./routes/admin');
var category = require('./routes/category');


var app = express();


var dbUrl = process.env.MONGO_URL

mongoose.connect(dbUrl, function(err, res){
  if(err){
    console.log('CONNECTION FAILED')
  }else{
    console.log('CONNECTION SUCCESS')
  }
})


// app.use(enforce.HTTPS({ trustProtoHeader: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessions({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 60*24*60*60*10000,
  activeDuration: 30*60*10000

}))

app.use('/', index);
app.use('/api', api);
app.use('/facebook', facebook);
app.use('/account', account);
app.use('/admin', admin);
app.use('/category', category);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
