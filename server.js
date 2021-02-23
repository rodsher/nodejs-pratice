const { Server } = require('http')

const server = new Server((req, res) => {
    res.end('Ok!')
})

server.listen(3000)
