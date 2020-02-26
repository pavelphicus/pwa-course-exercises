// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Sum of all value elements in ES5
console.time('ES5');
var t = 0;
for (var i = 0; i < elements.length; i++) {
    t += elements[i].value;
}
console.log("The sum of " + elements.length + " values in ES5 is: " + t);
console.timeEnd('ES5');

// Sum of all value elements in ES6
console.time('ES6');
let total = 0;
elements
    .forEach(function(element, i) {
        total += element.value;
    });
console.log(`The sum of ${elements.length} values in ES6 is: ${total}`);
console.timeEnd('ES6');