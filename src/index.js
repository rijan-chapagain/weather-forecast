// import our exported modules
var server = require("./server");
var router = require("./router");
var start = require("./requestHandlers/start");
var display = require("./requestHandlers/display");
var download = require("./requestHandlers/download");

var styles = require("./requestHandlers/readStyles");
var jquery = require("./requestHandlers/readJquery");
var script = require("./requestHandlers/readScript")

// create ‘handle’ object literal
// ***JSON format***
var handle = {
    "/css" : styles.reqCss,
    "/xsl" : styles.reqXsl,
    "/htmlValidator" : script.reqValidate,
    "/js/jquery" : jquery.reqJquery,

    "/" : start.reqStart,
    "/start" : start.reqStart,

    "/check" : start.reqCheck,
    "/display" : display.reqDisplay,
    "/download" : download.reqDownload
};

server.startServer(router.route, handle);
