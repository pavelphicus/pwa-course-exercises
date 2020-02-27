let url = 'https://reqres.in/api/users';
let data = {
    "name" : "John Doe",
    "job" : "Engineer",
    "age" : 37,
    "personal_id" : "12345678A"
};

fetch(url, {
    method : 'POST',
    body : JSON.stringify(data), // Important to send text-plain object
    headers : {
        'Content-Type' : 'application/json'
    }
})
    .then(response => response.json())
    .then(body => {
        console.log(body);
    })
    .catch(error => {
        console.error("Error on POST request...")
    });