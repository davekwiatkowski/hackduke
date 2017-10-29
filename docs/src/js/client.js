let socket = null;

function clientInit() {
    // Create WebSocket connection.
    socket = new WebSocket('ws://localhost:1337');

    const email = user.email;

    // Listen for messages from the server
    socket.onmessage = event => {
        const counts = JSON.parse(event.data);
        Object.keys(counts).forEach(key => {
            const val = counts[key];
            $('#count' + key).text(val);
        });
    };
}

handle = data => {
    // Send user email and choice
    socket.send(
        JSON.stringify({
            email: user.email,
            choice: data
        })
    );
}