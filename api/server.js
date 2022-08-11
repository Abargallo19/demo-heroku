const express = require('express');

const server = express();

module.exports = server;

server.get('/', (req, res) => {
    res.send('Aloha!');
});

server.put('/', (req, res)=> {
    res.send('Hello from put');
});