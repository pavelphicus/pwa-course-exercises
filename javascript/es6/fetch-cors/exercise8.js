let url = 'https://es.wikipedia.org/';

fetch(url)
    .then(response => response.text())
    .then(html => {
        let body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });