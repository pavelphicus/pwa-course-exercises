self.addEventListener('fetch', event => {
    if (event.request.url.includes('style.css')) {

        let response = new Response(`
            body {
                background-color: #600;
                color: #fff;
                font-size: 1.5em;
                padding: 50px 20px;
            }
        `, {
            headers : {
                'Content-Type' : 'text/css'
            }
        });

        event.respondWith(response);
    }
});