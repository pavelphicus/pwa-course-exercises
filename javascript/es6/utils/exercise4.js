// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Find value of Esther's ID using includes
let esther = elements
    .find(function(element, i) {
        return element.id.includes('Esther');
    });
console.log(`The value of Esther ID is: ${esther.value}`);