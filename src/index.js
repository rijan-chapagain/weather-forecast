// import our exported modules
var server = require("./server");
var router = require("./router");
var styles = require("./requestHandlers/styles");
var start = require("./requestHandlers/start");
var display = require("./requestHandlers/display");
var download = require("./requestHandlers/download");
var jquery = require("./requestHandlers/jquery");
var script = require("./requestHandlers/script")

// create ‘handle’ object literal
// ***JSON format***
var handle = {
    "/css" : styles.reqCss,
    "/xsl" : styles.reqXsl,
    "/htmlValidator" : script.reqValidate,
    "/" : start.reqStart,
    "/start" : start.reqStart,
    "/check" : start.reqCheck,
    "/display" : display.reqDisplay,
    "/download" : download.reqDownload,
    // "/jquery" : jquery.reqJquery,
    "/plugins" : jquery.reqPlugins
};

server.startServer(router.route, handle);
