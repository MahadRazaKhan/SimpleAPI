const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Home Page");
        console.log("Home Page Opened");
    }

    else if (req.url == "/SimpleAPI") {
        fs.readFile(`${__dirname}/SimpleAPI.json`, "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(data);
            }
        });
        console.log("SimpleAPI Page Opened");
    }
    
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Error 404, Page Not Found!</h1>");
        console.log("Invalid Page Opened");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port 8000");
});