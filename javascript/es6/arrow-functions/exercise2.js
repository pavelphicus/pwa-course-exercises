this.a = 2;
this.b = 3;

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;

console.log(`Out of timeout: ${this.a} + ${this.b} = ${add(this.a, this.b)}`);
console.log(`Out of timeout: ${this.a} - ${this.b} = ${subtract(this.a, this.b)}`);

setTimeout(function() {
    console.log(`Within timeout: ${this.a} + ${this.b} = ${add(this.a, this.b)}`);
    console.log(`Within timeout: ${this.a} - ${this.b} = ${subtract(this.a, this.b)}`);
}, 1000);

setTimeout(() => {
    console.log(`Within timeout with arrow function: ${this.a} + ${this.b} = ${add(this.a, this.b)}`);
    console.log(`Within timeout with arrow function: ${this.a} - ${this.b} = ${subtract(this.a, this.b)}`);
}, 2000);