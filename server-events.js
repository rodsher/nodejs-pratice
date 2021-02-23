const { Server } = require('http');

const server = new Server((req, res) => {
    res.end('Ok!');
});

const emit = server.emit;

server.emit = (...args) => {
    console.log(args[0]);

    return emit.apply(server, args);
};

server.listen(3030)