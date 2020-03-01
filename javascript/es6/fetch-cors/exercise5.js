let url = 'https://reqres.in/api/users/1';

// fetch(url)
//     .then(response => {
//         response.json().then(body => {
//             console.log(body.data)
//         });
//         response.json().then(body => {
//             console.log(body.data)
//         });
//     });

// fetch(url)
//     .then(response => {
//         response.clone().json().then(body => {
//             console.log(body.data)
//         });
//         response.json().then(body => {
//             console.log(body.data)
//         });
//     });
//
// fetch(url)
//     .then(response => {
//         response.clone().json().then(body => {
//             console.log(body.data)
//         });
//         response.json().then(body => {
//             console.log(body.data)
//         });
//         response.json().then(body => {
//             console.log(body.data)
//         });
//     });
//
fetch(url)
    .then(response => {
        response.clone().json().then(body => {
            console.log(body.data)
        });
        response.clone().json().then(body => {
            console.log(body.data)
        });
        response.json().then(body => {
            console.log(body.data)
        });
    });