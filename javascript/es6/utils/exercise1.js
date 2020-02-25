// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Sum of all value elements
let total = 0;
elements
    .forEach(function(element, i) {
        total += element.value;
    });
console.log(`The sum of ${elements.length} values is: ${total}`);