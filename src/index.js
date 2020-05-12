// import our exported modules
var server = require("./server");
var router = require("./router");
var start = require("./requestHandlers/start");
var view = require("./requestHandlers/view");
var styles = require("./requestHandlers/styles");

// create ‘handle’ object literal
// ***JSON format***
var handle = {
    "/css/styles.css" : styles.reqCss,
    "/" : start.reqStart,
    "/start" : start.reqStart,
    "/check" : start.reqCheck,
    "/view" : view.reqView
};

server.startServer(router.route, handle)