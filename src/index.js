// import our exported modules
var server = require("./server");
var router = require("./router");
var styles = require("./requestHandlers/styles");
var start = require("./requestHandlers/start");
var display = require("./requestHandlers/display");
var download = require("./requestHandlers/download");

// create ‘handle’ object literal
// ***JSON format***
var handle = {
    "/css" : styles.reqCss,
    "/xsl" : styles.reqXsl,
    "/" : start.reqStart,
    "/start" : start.reqStart,
    "/check" : start.reqCheck,
    "/display" : display.reqDisplay,
    "/download" : download.reqDownload
};

server.startServer(router.route, handle);
