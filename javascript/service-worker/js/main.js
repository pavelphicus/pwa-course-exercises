function notify(title, body, shouldRequireInteraction = false, data = null) {
    let random = Math.round(Math.random() * 1000);
    let notification = new Notification(title, {
        body : body,
        icon: '/assets/pwa.png',
        requireInteraction: shouldRequireInteraction,
        data : data,
        tag: `notification_${random}`
    });
    notification.addEventListener('click', event => {
        let data = event.target.data;
        console.log(data);
    });
    return notification;
}

function tryToNotify() {
    let notification = null;
    if (!window.Notification) {
        alert("Este navegador no soporta las notificaciones del sistema");
    } else if (Notification.permission === "granted") {
        notification = notify(
            "Hello",
            `I'm a Notification with granted permission!`,
            true,
            {
                url : window.location.href
            }
        );
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission()
            .then(response => {
                if (response === 'granted'){
                    notification = notify(
                        "Hello!",
                        `I'm a Notification with granted permission!`,
                        true,
                        {
                            url : window.location.href
                        }
                    );
                }
            });
    }
}

if (navigator.serviceWorker) {
    console.log(`I can use Service Worker!`);
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log(`I can't use Service Worker, please update me...`);
}

let button = document.querySelector('.btn-success');
button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    tryToNotify();
});