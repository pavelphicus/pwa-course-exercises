class Animal {

    name;
    legs;
    age;

    constructor(name, legs, age) {
        this.name = name;
        this.legs = legs;
        this.age = age;
    }

    hi = () => {
        console.log(`Hi! My name is ${this.name}, i'm ${this.age} years old, and i have ${this.legs} legs`)
    }

}

class Human extends Animal {

    id;
    surname;

    constructor (id, name, surname, age) {
        super(name, 2, age);
        this.id = id;
        this.surname = surname;
    }

    hi = () => {
        console.log(`Hi! My name is ${this.name} ${this.surname}, i'm ${this.age} years old, and i have ${this.legs} legs. My ID is: ${this.id}`)
    }

}

let bear = new Animal('Yogi', 4, 3);
bear.hi();
console.log(bear);

let human = new Human('12345678A', 'John', 'Doe', 37);
human.hi();
console.log(human);