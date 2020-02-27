// Function with params, delay and callback
function addCallbackDelay(a, b, delay, callBack) {
    console.log(`Adding (addCallbackDelay) ${a} + ${b}...`);
    setTimeout(function() {
        callBack(a + b);
    }, delay);
}
addCallbackDelay(1, 2, 1000, function(c) {
    addCallbackDelay(c, 3, 500, function(d) {
        addCallbackDelay(d, 4, 10000, function(e) {
            console.log(`Response (addCallbackDelay): ${e}`);
        });
    });
});