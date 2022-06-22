// ﻿1*. Работа с файлами. Файл "data.txt" заполнен случайными целыми числами,

// числа разделены одним пробелом.

// Сформировать файл "out-1.txt" из элементов файла "data.txt", делящихся

// без остатка на 2. Сформировать файл "out-2.txt" из элементов файла "data.txt",

// возведенных в степень 3. Тестовый набор данных для тестирования можно

// скачать отсюда: https://yadi.sk/d/s7Gz7ypi3XCBXP

// Для записи текстовых файлов воспользуйтесь функцией

// writeFile описанной в документации:

// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback

// или в русской версии:

// https://nodejsdev.ru/api/fs/#filehandlewritefiledata-options

const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const filename = "data.txt";
const fileout1 = "out1.txt";
const fileout2 = "out2.txt";
http.createServer((request, response) => {// вызов метода создания http сервера
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${filename} is read and sent to the client\n`);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            let arr = data.split(' ')
            let arr1 = arr.filter(item => +item % 2 === 0)
            let arr2 = arr.map(item => (+item) ** 3)

            fs.writeFile(fileout1, arr1.join(" "), (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log("Файл про остаток от деления на 2 записан!!")
            })
            fs.writeFile(fileout2, arr2.join(" "), (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log("Файл про возведение в третью степень тоже записан!!")
            })

            response.end();
        }
    });
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});