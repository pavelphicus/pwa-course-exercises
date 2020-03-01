let url = 'https://reqres.in/api/users';

fetch(url)
    .then(response => {
        response.json().then(body => {
            body.data.forEach(b => {
                console.log(b);
            });
        })
    })
    // .then(body => {
    //     // console.log(body);
    //     body.data.forEach(b => {
    //         console.log(b);
    //     })
    // })
    .catch(error => {
        console.error("Error on GET request...")
    });
