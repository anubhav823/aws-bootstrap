const http = require('http');
const { hostname } = require('os');
const msg = 'Hello Cloud';
const port = 8080;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end(msg);
});
server.listen(port, hostname,  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});