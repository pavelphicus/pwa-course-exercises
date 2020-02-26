let sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Function with params, control error and delay
let sum = async (delay, ...values) => {
    if (values.length > 0) {
        console.log('Sum of values: ', values);
        await sleep(delay);
        let total = 0;
        values.forEach(v => total += v);
        return total;
    } else {
        throw new Error(`I can't sum an empty list of numbers`);
    }
};

// Immediately auto invoked function, it executes after it's created
(async () => {
    try {
        console.log('One number: ', await sum(1000, 1));
        console.log('Two numbers: ', await sum(2000, 1, 2));
        console.log('More than two numbers: ', await sum(3000, 1, 2, 3, 4));
        console.log('No numbers: ', await sum());
    } catch (e) {
        console.error(e);
    }
})();