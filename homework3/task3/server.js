const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом

const filename = "header.html";

const filename1 = "body.html";

const filename2 = "footer.html";
let fullData = "";

http.createServer((request, response) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${filename} is read and sent to the client\n`);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fullData += data
            
            fs.readFile(filename1, 'utf8', (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    console.log(`The file ${filename1} is read and sent to the client\n`);
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    fullData += data
                    console.log(fullData)
                    
                    fs.readFile(filename2, 'utf8', (err, data) => {
                        if (err) {
                            console.log('Could not find or open file for reading\n');
                            response.statusCode = 404;
                            response.end();
                        } else {
                            console.log(`The file ${filename2} is read and sent to the client\n`);
                            response.writeHead(200, { 'Content-Type': 'text/html' });
                            fullData += data
                            console.log(fullData)
                            response.end(fullData);
                        }
                    });
                    console.log("Request accepted!");
                }
            })
        }
    })
}).listen(8080, () => {
        console.log("HTTP server works in 8080 port!\n");
    });