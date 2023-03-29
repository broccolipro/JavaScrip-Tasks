class User {
    constructor(name, surname ) {
        this.name = name;
        this.surname = surname;
    }
}


class Student extends User{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }

    getCourse() {
        return new Date().getFullYear() - this.year;
    }
}

let student = new Student('Ivan', 'Ivanov', 2018)

console.log(student.name)
console.log(student.surname)
console.log(student.getFullName())
console.log(student.getCourse())
