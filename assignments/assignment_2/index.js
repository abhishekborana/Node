let http = require("http");
let fs = require("fs");
let path = require("path");
// fs.writeFile('index.html','<h1>Hello World</h1>',()=>{
//     console.log("Html file created successfully");
// });

let server = http.createServer(function(req, res){
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
})
server.listen(3000);
