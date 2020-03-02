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
    console.log('SW: Activated and working...');
});

self.addEventListener('fetch', event => {
    // Apply cache strategies
});

self.addEventListener('push', event => {
    let random = Math.round(Math.random() * 1000);
    self.registration.showNotification("Hello!", {
        body: `I'm a Notification from SW`,
        icon: '/assets/pwa.png',
        tag: `Notification_${random}`,
        requireInteraction: true,
        data : {
            url : 'http://localhost:8080'
        }
    })
        .then(notificationEvent => {
            console.log("SW Notification Event Promise");
        });
    //new Notification("Hello, I'm a Notification!");
    // console.log('SW: Push notification received', event);
});

self.addEventListener('notificationclick', event => {
    console.log(event);
    console.log(event.notification.data);
    event.notification.close();
    clients.openWindow(event.notification.data.url);
});