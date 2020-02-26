// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Sum of odd elements in ES5
console.time('ES5');
var a = null;
for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === 'Antonio') {
        a = elements[i];
        break;
    }
}
console.log("The value of Antonio ID in ES5 is: " + a.value);
console.timeEnd('ES5');

console.time('ES6');
// Find value of Antonio's ID using comparator
let antonio = elements
    .find(function(element, i) {
        return element.id === 'Antonio'
    });
console.log(`The value of Antonio ID in ES6 is: ${antonio.value}`);
console.timeEnd('ES6');