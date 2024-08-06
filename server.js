const http = require ("http");
const port= 8081;
http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type": "text/html" });
    res.write("<h1>I am server:-) </br> This is web page</h1>");
    res.end();
})
.listen(port,()=>{
    console.log(`nodeJs server Started on port:${port}`);
});

// http://localhost:8081