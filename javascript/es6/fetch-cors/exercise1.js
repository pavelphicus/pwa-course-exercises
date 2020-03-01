var url = 'https://reqres.in/api/users';
var request = new XMLHttpRequest();

request.open('GET', url, true);
request.send(null);

request.onreadystatechange = function(state) {
    if (request.readyState === 4) {
        // console.log(request.response);
        var response = JSON.parse(request.response);
        response.data.forEach(d => {
            console.log(d);
        })
        // console.log(response.data);
    }
};