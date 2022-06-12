const http = require('http'); // подключение модуля
const server = http.createServer((request, response) => { // вызов метода создания http сервера
console.log("HTTP works!");
response.writeHead(200, {'Content-Type':'text/html'});
response.write('<h1>Hello</h1>');
response.end();
});
server.listen(8080);

// response.writeHead(statusCode[, statusMessage][, headers]) — отсылает заголовки ответа на запрос
// • status code — HTTP три цифры кода к примеру 404
// • statusMessage — опциональный параметр задается программистом
// • headers - возвращаемые заголовки.
// response.end() - Это метод сообщает серверу что все заголовки и тело были высланы. Этот метод
// должен вызываться на каждый ответ. В нем также можно возвращать данные.
// response.write() - пересылка порции данных
// 1 Запустите сервер. Перешлите клиенту свою простую страницу.
// 2 Отдайте пользователю ошибку 404