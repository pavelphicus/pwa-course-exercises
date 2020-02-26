import Animal from './Animal.js';

export default class Human extends Animal {

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