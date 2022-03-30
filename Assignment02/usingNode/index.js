const http = require("http");
const fs = require("fs");
const path=require("path");
const serveAllRequests = function(req, res) {
    let statusCode;
    let fileBuffer;
    switch (req.url) {
        case "/json":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end("{'message' : 'Hello World!'}");
            break;
        case "/":
            res.setHeader("Content-Type", "text/html");
            fs.readFile(path.join(__dirname , "index.html"),
                function(err, buffer) {
                    if (err) {
                        statusCode = 404;
                        fileBuffer = "File not Found";
                    } else {
                        statusCode = 200;
                        fileBuffer = buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
            break;
        case "/index.html":
            res.setHeader("Content-Type", "text/html");
            fs.readFile(path.join(__dirname , "index.html"),
                function(err, buffer) {
                    if (err) {
                        statusCode = 404;
                        fileBuffer = "File not Found";
                    } else {
                        statusCode = 200;
                        fileBuffer = buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
            break;    
        case "/page1.html":
            res.setHeader("Content-Type", "text/html");
            fs.readFile(path.join(__dirname , "page1.html"),
                function(err, buffer) {
                    if (err) {
                        statusCode = 404;
                        fileBuffer = "File not Found";
                    } else {
                        statusCode = 200;
                        fileBuffer = buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });   
            break;    
        case "/page2.html":
            res.setHeader("Content-Type", "text/html");
            fs.readFile(path.join(__dirname , "page2.html"),
                function(err, buffer) {
                    if (err) {
                        statusCode = 404;
                        fileBuffer = "File not Found";
                    } else {
                        statusCode = 200;
                        fileBuffer = buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });  
            break;          
    }
}

const server =
    http.createServer(serveAllRequests);
    server.listen(4444, "localhost",
        function() {
            console.log("Server is running on http: //localhost:4444");
            });