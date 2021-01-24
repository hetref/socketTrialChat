const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname  + '/public/index.html');
});

io.on('connection', (socket) => {
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    // socket.on('chat-message', (msg) => {
    //     console.log('message: ' + msg);
    // });
});

http.listen(3000, () => {
    console.log('Listening on port 3000');
});