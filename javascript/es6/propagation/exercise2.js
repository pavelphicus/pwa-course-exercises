let showResponse = (data, status, message) => {
    console.log(`Status: ${status}, Message: ${message}, Data:`, data);
};

let getNumbers = (...numbers) => {
    return {
        data : numbers,
        status : 200,
        message : 'Ok'
    }
};

let { data, status, message } = getNumbers(1, 2, 3, 4);
let args = [data, status, message];
showResponse(...args);