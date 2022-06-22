const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
    console.log('HTTP работает!!')
    if (req.method == 'GET' && req.url !== '/') {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h1>Pade not found 404</h1>`)
        res.end()
    } else {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(data)
            }
        })
    }

}).listen(8080)