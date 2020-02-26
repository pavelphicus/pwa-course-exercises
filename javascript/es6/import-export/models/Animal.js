export default class Animal {

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