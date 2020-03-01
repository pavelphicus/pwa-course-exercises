self.addEventListener('fetch', event => {
    if (event.request.url.includes('https://reqres.in')) {
        let parsed_request = new Promise(resolve => {
            fetch(event.request)
                .then(response => response.json())
                .then(body => {
                    let data = body.data.filter(d => d.first_name.toLowerCase().includes('c'))
                    let parsed_response = new Response(
                        JSON.stringify(data),
                        {
                            headers : {
                                'Content-Type' : 'application/json'
                            }
                        }
                    );
                    resolve(parsed_response);
                });
        });
        event.respondWith(parsed_request);
    }
});