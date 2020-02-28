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

});

self.addEventListener('sync', event => {
    // Re-sync offline saved data to remotes reading indexDB
    console.log('SW: Connection established successfully');
    console.log(event);
    console.log(event.tag);
});