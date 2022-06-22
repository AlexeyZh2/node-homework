const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const filename = "index.html";
http.createServer((request, response) => {// вызов метода создания http сервера
fs.readFile(filename, 'utf8', (err, data) => {
if (err) {
console.log('Could not find or open file for reading\n');
response.statusCode = 404;
response.end();
} else {
console.log(`The file ${filename} is read and sent to the client\n`);
response.writeHead(200, {'Content-Type':'text/html'});
response.end(data);
}
});
console.log("Request accepted!");
}).listen(8080, ()=>{
console.log("HTTP server works in 8080 port!\n");
});
// fs.readFile(path[, options], callback) – асинхронное чтение файла, как только файл будет прочитал
// вызывается функция callback.
// • path – строка имя файла (может включать в себя путь к файлу);
// • options – необязательный параметр, может задаваться в виде строки, тогда он задаёт
// кодировку файла и прочитанный из файла информация будет представлять собой строку.
// • callback(err, data) – функция обратного вызова, ей передаются два аргумента:
// • err – ошибка чтения файла;
// • data – прочитанное содержимое файла, если задана кодировка, то это строка.
// Тут мы сначала подключаем еще один важный Nоdе-модуль, отвечающий за работу с файловой
// системой. Затем при обработке запроса читаем файл index.html в нужной кодировке и
// записываем его в ответ сервера. Теперь при открытии браузером адреса http://127.0.0.1:8080
// можем любоваться вашей веб-страницей.
// 1 Сделайте три файла header.html , body.html, footer.html с простой html версткой и отдайте
// контент за один вызов сервера.