var url = 'https://reqres.in/api/users';
var request = new XMLHttpRequest();

request.open('GET', url, true);
request.send(null);

request.onreadystatechange = function(state) {
    if (request.readyState === 4) {
        var response = JSON.parse(request.response);
        console.log(response);
    }
};