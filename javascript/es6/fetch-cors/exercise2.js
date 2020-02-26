let url = 'https://reqres.in/api/users';

fetch(url)
    .then(response => response.json())
    .then(body => {
        console.log(body);
    })
    .catch(error => {
        console.error("Error on GET request...")
    });
