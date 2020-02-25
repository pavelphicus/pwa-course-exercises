let image = document.querySelector('img#image');
let url = 'assets/pwa.png';

fetch(url)
    .then(response => response.blob()) // blob: Binary Large Object
    .then(image => {
        console.log(file);
        let imagePath = URL.createObjectURL(image);
        console.log(imagePath);
        image.src = imagePath;
    })
    .catch(error => {
        console.error("Error on GET local image request...")
    });