/**
 * Route function check the types of pathname and response based on that.
 * 
 * @param {Function} pathname 
 * @param {object} handle 
 * @param {object} request 
 * @param {object} response 
 */
function route(pathname, handle, request, response){
    //check if the pathname is function or not.
    if (typeof handle[pathname] === 'function') {
        handle[pathname](request, response); // call the appropriate function && pass response argument
    } 
    else {
        console.log("No handler found for: " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("<h2>Sorry, Resource not found! </h2> Click the link below if you are looking for: "+
        "<h2><a href='http://localhost:40310/start'> Rijan's Index page</a> </h2><br>  Cheers!!");
        response.end();
    }
}
//allow access to other files
exports.route = route;
