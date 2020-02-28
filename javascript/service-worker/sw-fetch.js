self.addEventListener('install', event => {
    // Download assets and resources
    // Create local cache
    // Create local database
    console.log('SW: Installing...');

    const installation = new Promise((resolve => {
        setTimeout(() => {
            console.log('SW: Installation complete!');
            self.skipWaiting();
            resolve();
        }, 500);
    }));

    event.waitUntil(installation);
});

self.addEventListener('activate', event => {
    // Remove old cache
    console.log('SW: Activated and working...')
});

self.addEventListener('fetch', event => {
    // Apply cache strategies
    console.log(event.request.url);
    if (event.request.url.includes('https://reqres.in')) {
        const response = new Response(`{
            "ok" : false,
            "message" : "This is my own response"
        }`, {
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        event.respondWith(response);
    }
});