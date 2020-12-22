const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
 
var server = http.createServer();
server.on('request', doRequest);
var fs = require('fs');
function doRequest(req, res) {
    console.log(new Date() + " : " + req.url);
    if (req.url == "/xhr") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            console.log(body);
	});
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("received xhr.");
        res.end();
    } else {
        fs.readFile('./test.html', 'utf-8' , (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
}
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// web socket
let ws = require('ws')
var wsserver = new ws.Server({port:8000});
wsserver.on('connection', ws => {
    ws.on('message', message => {
        console.log(message);
        wsserver.clients.forEach(client => {
            client.send("received a message : '"+message+"'");
        });
    });
    ws.on('close', () => {
        console.log('close');
    });
});
