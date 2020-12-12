const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
 
var server = http.createServer();
server.on('request', doRequest);
var fs = require('fs');
function doRequest(req, res) {
    fs.readFile('./test.html', 'utf-8' , doRead );
    function doRead(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
    
}
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
