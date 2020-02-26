function es6bad(name = "John Doe", age) {
    console.log(`es6 (bad) with two params - Name: ${name}, Age: ${age}`);
}
es6bad(23);
es6bad('Luisa', 23);

function es6good(age, name = "John Doe") {
    console.log(`es6 (good) with two params - Name: ${name}, Age: ${age}`);
}
es6good(23);
es6good(23, 'Luisa');
