// Objects array
const elements = [{ id : 'Pepe', value : 7 }, { id : 'Miguel', value : 5 }, { id : 'María', value : 3 }, { id : 'Antonio', value : 6 }, { id : 'Luisa', value : 7 }, { id : 'Esther', value : 9 }];
console.log('Elements:', elements);

// Filter elements that contains 'e' in id and calc de average of her values
let eSum = 0;
let eElements = elements
    .filter(element => element.id.includes('e'))
    .map(element => element.value);
console.log('Elements with "e" in ID:', eElements);
eElements
    .forEach(element => eSum += element);
console.log(`The average of "e" elements is: ${eSum / eElements.length}`);