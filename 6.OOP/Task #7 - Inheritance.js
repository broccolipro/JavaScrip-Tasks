class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        console.log('Such-and-such an animal is sleeping');
    }

    eat() {
        console.log('The animal is eating ' + this.food);
    }

    sleep() {
        console.log('The animal is sleeping');
    }
}

class Dog extends Animal {
    constructor(food, location, breed) {
        super(food, location);
        this.breed = breed;
    }

    makeNoise() {
        console.log('The dog is barking');
    }

    eat() {
        console.log('The dog is eating ' + this.food);
    }
}

class Cat extends Animal {
    constructor(food, location, color) {
        super(food, location);
        this.color = color;
    }

    makeNoise() {
        console.log('The cat is meowing');
    }

    eat() {
        console.log('The cat is eating ' + this.food);
    }
}

class Horse extends Animal {
    constructor(food, location, speed) {
        super(food, location);
        this.speed = speed;
    }

    makeNoise() {
        console.log('The horse is neighing');
    }

    eat() {
        console.log('The horse is eating ' + this.food);
    }
}

class Veterinary {
    treatAnimal(animal) {
        console.log('Treating ' + animal.constructor.name + '...');
        console.log('Food: ' + animal.food);
        console.log('Location: ' + animal.location);
        console.log('------------------------');
    }
}

const animals = [
    new Dog('bones', 'kennel', 'German Shepherd'),
    new Cat('fish', 'house', 'white'),
    new Horse('hay', 'stable', 'fast'),
    new Dog('chicken', 'yard', 'Labrador Retriever'),
    new Cat('mice', 'basement', 'black'),
    new Horse('grass', 'pasture', 'slow')
];

const vet = new Veterinary();

animals.forEach(animal => {
    vet.treatAnimal(animal);
});
