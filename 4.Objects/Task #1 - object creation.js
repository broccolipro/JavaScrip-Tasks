// Задача №1 - создание объекта
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

let person = {};
person.name = 'John';
person.surname = 'Smith';
person.name = 'Pete';
delete person.name

console.log(person)