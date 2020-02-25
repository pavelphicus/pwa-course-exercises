import Animal from './Animal.js';
import Human from './Human.js';

let bear = new Animal('Yogi', 4, 3);
bear.hi();
console.log(bear);

let human = new Human('12345678A', 'John', 'Doe', 37);
human.hi();
console.log(human);