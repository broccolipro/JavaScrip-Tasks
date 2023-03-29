// адача №7 - getters
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
// Создайте по одной функции get для каждого поля объекта (функции/методы долны принадлежать объекту)

let person = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com',
    },
    address: 'Moldova',
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    },
    getSalary: function() {
        return this.salary;
    },
    getContacts: function() {
        return this.contacts;
    },
    getAddress: function() {
        return this.address;
    }
}


console.log(person.getName());
console.log(person.getAge());
console.log(person.getSalary());
console.log(person.getContacts());
console.log(person.getAddress());