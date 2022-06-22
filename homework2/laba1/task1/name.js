const http = require('http');
const server = http.createServer((req, res) => {
console.log('HTTP работает!')
})
server.listen(8080)