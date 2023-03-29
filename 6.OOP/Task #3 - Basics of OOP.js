class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }
}

let worker = new Worker('Ivan', 'Ivanov', 10, 31);
let worker2 = new Worker('Vasil', 'Vasilov', 20, 15);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log()
console.log(worker.getSalary() + worker2.getSalary())