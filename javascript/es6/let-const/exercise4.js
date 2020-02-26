const PI = 3.141592;
function circleLongitude(radius) {
    return PI * radius * 2
}

let r = 4;

console.log(`Circle longitude of radius ${r}: ${circleLongitude(r)}`);

//Si intentamos asignar un nuevo valor a nuestra constante:
PI = 2;
console.log(`a: ${PI}`);