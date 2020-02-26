let sum = (...values) => {
    let total = 0;
    values.forEach(v => total += v);
    return total;
};

console.log(`Total: ${sum(1, 2, 3)}`);
console.log(`Total: ${sum(1, 2, 3, 4, 5, 6, 7)}`);