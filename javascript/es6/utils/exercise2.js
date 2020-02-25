// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Sum of odd elements
let oddTotal = 0;
let oddElements = elements
    .filter(function(element, i) {
        return (i % 2 !== 0)
    });
console.log('Odd Elements:', oddElements);
oddElements
    .forEach(function(element, i) {
        oddTotal += element.value;
    });
console.log(`The sum of odd ${oddElements.length} element values is: ${oddTotal}`);