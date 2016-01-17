process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.INSTANCE_NAME = process.env.INSTANCE_NAME || 'dev';

var app;
if (process.env.NODE_ENV === 'development') {
    app = require('./server.dev.js');
}
else {
    app = require('./server.js');
}

var appPort = process.env.PORT || 3000;
app.set('port', appPort);

var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on port ' + server.address().port);
});