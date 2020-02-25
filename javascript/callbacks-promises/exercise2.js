// Function with params and delay
function addDelay(a, b, delay) {
    console.log(`Adding (addDelay) ${a} + ${b}...`);
    setTimeout(function() {
        return a + b;
    }, delay);
}
console.log(`Response (addDelay): ${addDelay(1, 2, 1000)}`);