// Function with params, delay and callback
function addCallbackDelay(a, b, delay, callBack) {
    console.log(`Adding (addCallbackDelay) ${a} + ${b}...`);
    setTimeout(function() {
        callBack(a + b);
    }, delay);
}
addCallbackDelay(1, 2, 1000, function(response) {
    addCallbackDelay(response, 3, 1000, function(response) {
        addCallbackDelay(response, 4, 1000, function(response) {
            console.log(`Response (addCallbackDelay): ${response}`);
        });
    });
});