let express = require('express');
let mustacheExpress = require('mustache-express'); //подключаем модуль express
let app = express();
app.use(express.static('public'));//создаем приложение express
// Регистрируем '.mustache' расширение как шаблоны Mustache Express
app.set('views', __dirname + '/views'); //указываем расположение папки с шаблонами
app.engine('mustache', mustacheExpress()); //регистрируем шаблонизатор Mustache в Express
app.set('view engine', 'mustache'); //указываем использовать Mustache в качестве шаблонизатора
//Устанавливаем обработчик запроса вида: http://localhost:3000/
let bodyParser = require('body-parser'); /*подключаем модуль для обработки содержимого тела
post запроса */
app.listen(80); //Настраиваем express приложение слушать запросы на 80 порту
app.use(bodyParser.urlencoded({ extended: false })); /*регистрируем модуль для обработки
содержимого тела post запроса в express */
/* настраиваем статический сервер, для отдачи контента из папки
public */
//Формируем обработчик post запроса на адрес http://localhost:80/somepath
app.post('/somepath', (req, res, next) => {
    
    res.render('index', {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email
    });
    
});