const app = require('./app')

var server = app.listen(process.env.MY_PORT || 4444, function () {
    var port = server.address().port;
    console.log("Server started! Listen Port = %s", port)
})