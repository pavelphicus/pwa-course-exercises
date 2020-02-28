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
        }, 5000);
    }));

    event.waitUntil(installation);
});

self.addEventListener('activate', event => {
    // Remove old cache
    console.log('SW: Activated and working...')
});