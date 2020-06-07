// import our exported modules
var server = require("./server");
var router = require("./router");
var start = require("./requestHandlers/start");

var styles = require("./requestHandlers/readfile/readStyles");
var script = require("./requestHandlers/readfile/readScript")

// create ‘handle’ object literal
// ***JSON format***
var handle = {
    "/" : start.reqStart,
    "/start" : start.reqStart,
    "/check" : start.reqCheck,
    
    "/css" : styles.reqCss,
    "/js/htmlValidator" : script.reqValidate
};

server.startServer(router.route, handle);
