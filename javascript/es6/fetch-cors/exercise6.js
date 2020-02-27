let url = 'https://reqres.in/api/users/100000';

fetch(url)
    .then(response => {
        // console.log(response);
        if (response.ok && response.status >= 200 && response.status < 400) {
            return response.json();
        } else {
            // console.error("Error requesting user: ", response.status);
            throw new Error(`Error requesting user - Code: ${response.status}`)
        }
    })
    .then(console.log)
    .catch(error => {
        console.error(error);
    });