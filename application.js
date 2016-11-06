var express=require("express");
var app=express();

var mbaasApi = require('fh-mbaas-api');

var mbaasExpress = mbaasApi.mbaasExpress();
var cors = require('cors');

// list the endpoints which you want to make securable here
var securableEndpoints;
securableEndpoints = [];

var app = express();
var server=require("http").Server(app);
require("hssh")(server,{
  banner:"Welcome to RHMAP shell."
});
// Enable CORS for all requests
app.use(cors());

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);

// allow serving of static files from the public directory
// app.use(express.static(__dirname + '/public'));

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// app.use('/v1', require('./routes/v1.js')());

// Important that this is last!
app.use(mbaasExpress.errorHandler());

var port = process.env.FH_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8010;
var host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
server.listen(port, host, function() {
  console.log("App started at: " + new Date() + " on port: " + port); 
});
