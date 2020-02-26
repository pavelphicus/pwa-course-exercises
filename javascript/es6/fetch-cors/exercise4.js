let img = document.querySelector('img#image');
let url = 'assets/pwa.png';

fetch(url)
    .then(response => response.blob()) // blob: Binary Large Object
    .then(image => {
        console.log(image);
        let imagePath = URL.createObjectURL(image);
        console.log(imagePath);
        img.src = imagePath;
    })
    .catch(error => {
        console.log(error);
        console.error("Error on GET local image request...")
    });