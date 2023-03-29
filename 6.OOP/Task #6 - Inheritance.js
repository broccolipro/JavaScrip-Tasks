class Transport {
    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    }

    getModel() {
        return this.model;
    }
    getAge() {
        return new Date().getFullYear() - this.year;
    }

    move() {
        return 'I am transport i move like transport!'
    }
}

class Airplane extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }
    move() {
        return 'I am airplane I move like airplane!';
    }
}
class Car extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am car I move like car!'
    }
}
class Truck extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am truck I move like truck'
    }
}

class Airbus extends Airplane {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am airbus I move like airplane!';
    }
}
class Boeing extends Airplane {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am Boeing I move like airplane!'
    }
}

class Mercedes extends Car {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am Mercedes, I move like car!'
    }
}

class Man extends Truck {
    constructor(model, price, year) {
        super(model, price, year);
    }

    move() {
        return 'I am Man, I move like truck!'
    }
}