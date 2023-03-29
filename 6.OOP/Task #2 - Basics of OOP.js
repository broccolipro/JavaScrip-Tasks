class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }
}

let worker = new Person('Ivan', 'Ivanov');

console.log(worker.name)
console.log(worker.surname)
console.log(worker.name = 'Vasil')
console.log(worker.name = 'Vasilov')