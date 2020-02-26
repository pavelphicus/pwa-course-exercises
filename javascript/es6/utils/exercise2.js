// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Sum of odd elements in ES5
console.time('ES5');
var t = 0;
for (var i = 0; i < elements.length; i++) {
    if (i % 2 !== 0) {
        t += elements[i].value;
    }
}
console.log("The sum of odd " + elements.length + " values in ES5 is: " + t);
console.timeEnd('ES5');

// Sum of odd elements in ES6
console.time('ES6');
let oddTotal = 0;
let oddElements = elements
    .filter(function(element, i) {
        return (i % 2 !== 0)
    });
oddElements
    .forEach(function(element, i) {
        oddTotal += element.value;
    });
console.log(`The sum of odd ${oddElements.length} element values in ES6 is: ${oddTotal}`);
console.timeEnd('ES6');