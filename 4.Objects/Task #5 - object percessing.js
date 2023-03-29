// Задача №5 - обработка объектов
// Создайте объект person со следующей структурой:
// {
//     name: `Person`,
//         age: 123,
//     salary: 1542.33,
//     contacts: {
//     phone: `112`,
//         email: ‘email@domain.com’
// },
//     address: `Moldova`
// }
//
// Замените в этом объекте номер телефона на `+37312345678` и удалите поле address. Выведите объект в консоль.


let person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`
}

person.contacts.phone = '+37312345678';
delete person.address;

console.log(person)