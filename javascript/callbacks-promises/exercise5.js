// Function with params, control error and delay
function addPromiseDelayError(a, b, delay) {
    return new Promise(function(resolve, reject) {
        console.log(`Adding (addCallbackDelay) ${a} + ${b}...`);
        if (a + b < 10) {
            setTimeout(function() {
                console.log(`Response (addPromiseDelayError): ${a + b}`);
                resolve(a + b);
            }, delay);
        } else {
            reject('Response greater or equal than 10');
        }
    });
}

addPromiseDelayError(1, 2, 1000)
    .then(function(response) {
        return addPromiseDelayError(response, 3);
    })
    .then(function(response) {
        return addPromiseDelayError(response, 4);
    })
    .then(function(response) {
        return addPromiseDelayError(response, 5);
    })
    .catch(function(error) {
        console.error(`Response Error (addPromiseDelayError): ${error}`);
    });