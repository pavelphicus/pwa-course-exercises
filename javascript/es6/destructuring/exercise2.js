let getNumbers = () => {
    // Make a async call to remote service and obtain data
    return {
        data : [1, 2, 3, 4],
        status : 200,
        message : 'Ok'
    }
};
let { data, status, message } = getNumbers();
console.log(`Status: ${status}, Message: ${message}, Data:`, data);