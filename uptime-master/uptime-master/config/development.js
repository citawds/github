var server = 'localhost:27017';
var database = 'uptime';
var user = 'root';
var password = undefined;
var api = 'http://localhost:8082/api';
var port = 8082;
var pingHistory = 8035200000;
var qosAggregationInterval = 600000;
var updateInterval = 60000;
var verbose = true;

// Stackato Config Override
if (process.env.VCAP_APP_HOST)
{
    // Mongo Configuration
    server = 'SET THIS';
    database = 'fuel-uptime';
    user = 'SET THIS';
    password = 'SET THIS';

    // Stackato
    api = "http://" + process.env.VCAP_APP_HOST + ":" + process.env.PORT + "/api";
    port = process.env.PORT;
    pingHistory = process.env.PING_HISTORY;
    qosAggregationInterval = process.env.QOS_AGGREGATION_INTERVAL;
    updateInterval = process.env.UPDATE_INTERVAL;
    verbose = process.env.VERBOSE;
}

module.exports = {
    mongodb: {
        server: server,
        database: database,
        user: user,
        password: password
    },
    monitor: {
        apiUrl: api
    },
    analyzer: {
        pingHistory: pingHistory,
        qosAggregationInterval: qosAggregationInterval,
        updateInterval: updateInterval
    },
    server: {
        port: port
    },
    verbose: verbose
}