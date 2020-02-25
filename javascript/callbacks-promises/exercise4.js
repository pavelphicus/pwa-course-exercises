// Function with params, control error, delay and callback
function addCallbackDelayError(a, b, delay, callBack) {
    console.log(`Adding (addCallbackDelay) ${a} + ${b}...`);
    if (a + b < 10) {
        setTimeout(function() {
            callBack({
                status : 0,
                result : a + b
            });
        }, delay);
    } else {
        callBack({
            status : 1,
            result : 'Response greater or equal than 10'
        });
    }
}
addCallbackDelayError(1, 2, 1000, function(response) {
    if (response.status === 0) {
        addCallbackDelayError(response.result, 3, 1000, function(response) {
            if (response.status === 0) {
                addCallbackDelayError(response.result, 4, 1000, function(response) {
                    if (response.status === 0) {
                        console.log(`Response (addCallbackDelayError): ${response.result}`);
                    } else {
                        console.error(`Response Error (addCallbackDelayError): ${response.result}`);
                    }
                });
            } else {
                console.error(`Response Error (addCallbackDelayError): ${response.result}`);
            }
        });
    } else {
        console.error(`Response Error (addCallbackDelayError): ${response.result}`);
    }
});