// 1*. Задание на HTML, CSS, JS (Ajax) и NodeJS: Разработать сервер,

// который умеет отдавать запрашиваемые html страницы. Дана страница

// index.html. В ней есть блок #container и кнопка вне этого блока. Сделайте

// так, чтобы по нажатию на кнопку в #container ajax-ом подгружалось

// содержимое страницы ajax.html.

const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const path = require('path');
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
};
//const filename = "index.html";
const file1 = "ajax.html";

http.createServer((req, res) => {
    if(req.method == 'GET' && (req.url == '/' || req.url == '/style/style.css' || req.url =='/script.js')){
        let pathname;
        console.log("Request: " + req.url);
        if (req.url === '/')
        pathname = 'index.html';
        else
        pathname = '.' + req.url;
    // if(req.method == 'GET' && (req.url == '/' || req.url == '/style/style.css' || req.url =='/script.js')){

		fs.readFile(pathname, 'utf8', (err, data)=>{
			if(err){
				res.statusCode = 500;
				return res.end();
			} 
            console.log(`The file ${pathname} is read and sent to the client\n`);
			res.writeHead(200, {
				'Content-Type': mimeTypes[path.extname(pathname)]
			});
			res.end(data);
		});
    } 
    else if (req.method == 'GET' && req.url ==='/data'){
            console.log(`The file ${file1} is read and sent to the client\n`);
            fs.readFile(file1, 'utf-8', (err, data)=>{
                console.log("qqq", data)
                if(err){
                    res.statusCode = 500;
                    return res.end();
                } 
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)

        })
    };
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});

