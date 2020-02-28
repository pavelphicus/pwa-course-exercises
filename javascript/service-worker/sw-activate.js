self.addEventListener('install', event => {
    // Download assets and resources
    // Create local cache
    // Create local database
    console.log('SW: Installing...');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // Remove old cache
    console.log('SW: Activated and working...')
});