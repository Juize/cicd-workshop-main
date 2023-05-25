var express = require('express');
var app = express();

app.get('/getpodinfo', function (req, res) {
    const podInfo = {
        "MY_NODE_NAME": process.env.MY_NODE_NAME || '',
        "MY_POD_NAME": process.env.MY_POD_NAME || '',
        "MY_POD_NAMESPACE": process.env.MY_POD_NAMESPACE || '',
        "MY_POD_IP": process.env.MY_POD_IP || '',
        "MY_POD_SERVICE_ACCOUNT": process.env.MY_POD_SERVICE_ACCOUNT || '',
        "HEADERS": req.headers
    };

    res.json(podInfo)
})

app.get('/healthcheck', (req, res) => {
    res.status(200).json({ status: 'UP' });
});
  
module.exports = app;