const express = require('express');

const server = express();
server.use(express.json());



server.get('/', (req, res) => {
    res.send('Aloha! from heroku');
});

server.put('/', (req, res)=> {
    res.send('Hello from put');
});

server.post('/', (req, res)=> {
    res.json(req.body);
});

module.exports = server;