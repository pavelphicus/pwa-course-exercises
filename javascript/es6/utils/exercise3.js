// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Find value of Antonio's ID using comparator
let antonio = elements
    .find(function(element, i) {
        return element.id === 'Antonio'
    });
console.log(`The value of Antonio ID is: ${antonio.value}`);