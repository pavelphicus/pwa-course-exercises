if (navigator.serviceWorker) {
    console.log(`I can use Service Worker!`);
    navigator.serviceWorker.register('/sw.js');
} else {
    console.log(`I can't use Service Worker, please update me...`);
}

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        let content = document.querySelector('div.content');
        let table = `
        <table class="table table-striped table-dark table-border table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
        `;
        data.forEach(d => {
            table += `
                <tr>
                    <td>${d.id}</td>
                    <td>${d.first_name}</td>
                    <td>${d.last_name}</td>
                    <td>${d.email}</td>
                    <td><img src="${d.avatar}" height="30" alt="${d.first_name} ${d.last_name}"></td>
                </tr>
        `
        });
        table += `
            </tbody>
        </table>
        `;
        content.innerHTML = table;
    })
    .catch(console.error);