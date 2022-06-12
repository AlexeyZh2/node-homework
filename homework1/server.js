// 1. Требуется реализовать декоратор с параметрами pause,

// который откладывает выполнение функции на указанное

// количество секунд (о декораторах можно почитать тут: https://learn.javascript.ru/call-apply-decorators).

// Пример использования:

// function func() {

// console.log('Функция выполниться с задержкой в 2 секунды!');

// }

// let paused = pause(func, 2);

// paused();

// 2*. Требуется реализовать декоратор с параметрами returnObject,

// который в случае, если функция возвращает массив, подменяет

// его объектом. Имена задаются в параметрах декоратора. Декоратор

// универсальный, количество имен переменное (о декораторах можно почитать тут: https://learn.javascript.ru/call-apply-decorators)..

// Пример использования №1:

// function func(){

// return [1, 2]

// }

// let func_decoreted = return_object(func, 'one', 'two');

// let r = func_decoreted();

// console.log(r.one); // 1

// console.log(r.two); //2

// Пример использования №2:

// function func(){

// return ['JS', 'is', 'programming language']

// }

// let r = return_object (func, 'a', 'b', 'c')();

// console.log(r.c) // 'programming language'

// 3*. Фильтры - Задача с собеседования по JS.

// Есть массив с курсами, там есть prices с ценником в формате от … до … .

// Нужно сделать три фильтра по массивам requiredRange и показывать только те курсы, что устраивают по цене.

// Если задано например [null, 500] то читаем как «до 500».

// Исходные данные:

//Массив с курсами

let courses = [

{ name: 'Courses in England', prices: [0, 100] },

{ name: 'Courses in Germany', prices: [500, null] },

{ name: 'Courses in Italy', prices: [100, 200] },

{ name: 'Courses in Russia', prices: [null, 400] },

{ name: 'Courses in China', prices: [50, 250] },

{ name: 'Courses in USA', prices: [200, null] },

{ name: 'Courses in Kazakhstan', prices: [56, 324] },

{ name: 'Courses in France', prices: [null, null] },

];

//Фильтра по массивам

let requiredRange1 = [null, 100];

let requiredRange2 = [100, 350];

let requiredRange3 = [200, null];