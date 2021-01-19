'use strict';

console.log('hello разберем пример на прототипах :)');


//литерал обкт
const obj = {
    'key': 'строка',
    name: 'Maks',
    firstname: 'моеимя',
    'surname': 'еещ имя',
    walk: function (steps) {
        console.log(this.firstname, "прошел", steps, "шагов");
    }
};


//через функцию конструктор
const User = function(param) {
    this.firstname = param.firstname;
    this.surname = param.surname;
    this.walk = function(steps) {
        console.log(this.firstname, "прошел", steps, "шагов");
    }
}

//через new мы вызываем функции конструкторы и классы 
// для выделения памяти ))
//const maks = new User();


//передадим обкт в аргумерн
const dimty = new User({
    firstname: 'Idm',
    surname: 'Posadov'
});

const maksy = new User(obj);
console.log('1 maksy: ', maksy);

//добавим функ через протопип
User.prototype.coding = function(time) {
    console.log(this.surname, 'кодил еще', time, 'часов');
};

maksy.coding(9);

const max2 = new User({firstname:'mak 2', surname:'Макисма'});
console.log('2 maksy: ', max2);
max2.coding(5);