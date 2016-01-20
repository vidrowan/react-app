var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var compiler = webpack(config);

var app = express();

// development specific configuration
if (app.get('env') === 'development') {

    // use webpack dev middleware
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


// serve static assets
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// catch page requests
app.use(function(req, res, next) {
    var path = req.path;

    /*
     Catch anything that looks like a page request and pass it to the app
     for React-Router to handle
     */
    if (/^(\/[a-zA-Z0-9-_]*)+$/.test(path)) {
        // insert auth here

        return res.render('index');
    }

    next();
});

// TODO: catch requests for static assets

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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;