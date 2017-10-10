var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books_route');
        
var data = [{id:1, title:'Posesion', author:'Peter James', year:'1988', edition:'Lerner Ltda'}, {id:2, title:'El Hombre que Calculaba', author:'Malba Tahan', year:'1949', edition:'Desconocida'}];

var error =  require('./error_validations');

var app = express();
app.set('data', data);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var basePath = '/dsh/api/v1';

app.use('/', index);
app.use(basePath, books);

app.use(error.errorValidations);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {        
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if(err.status == 404){     
        res.json({
          status: err.status,    
          message: err.message,
          error: "Resource '" + req.path + "' not found"
        });        
    }
    else {
        res.json({
          status: err.status,    
          message: err.message,
          error: err
        });        
    }  
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    status: err.status,  
    message: err.message,
    error: {}
  });
});

module.exports = app;
