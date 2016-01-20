process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.INSTANCE_NAME = process.env.INSTANCE_NAME || 'dev';

var app = require('./server/server');

var appPort = process.env.PORT || 3000;
app.set('port', appPort);

var server = app.listen(app.get('port'), function() {
    console.log('Express ' + process.env.NODE_ENV + ' server listening on port ' + server.address().port);
});