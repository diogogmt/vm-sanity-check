var express = require('express');
var router = express.Router();
var os = require('os');
var df = require('df');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/os', function(req, res) {
  var osData = {
    release: os.release(),
    arch: os.arch(),
    platform: os.platform(),
    type: os.type(),
    hostname: os.hostname()
  };

  res.json(osData);
});

router.get('/cpu', function(req, res) {
  var cpuData = os.cpus();
  res.json(cpuData);
});

router.get('/memory', function(req, res) {
  var memoryData = {
    total: (((os.totalmem() / 1024) / 1024) / 1024),
    free: (((os.freemem() / 1024) / 1024) / 1024)
  };
  res.json(memoryData);
});

router.get('/storage', function(req, res) {
  df(function (error, response) {
    if (error) { return res.json(400, error)}
    console.log('response: ', response);
    response.forEach(function (item) {
      item.size = (((item.size / 2) / 1024) / 1024);
      item.used = (((item.used / 2) / 1024) / 1024);
      item.available = (((item.available / 2) / 1024) / 1024);
    });
    res.json(response);
  });
});

router.get('/interfaces', function(req, res) {
  var networkInterfaceData = [];
  var rawNetworkInterfaceData = os.networkInterfaces();
  var total = 0;

  for (var key in rawNetworkInterfaceData) {
    total += 1;
  }

  var resData = {
    total: total,
    interfaces: rawNetworkInterfaceData
  };
  res.json(resData);
});

module.exports = router;
