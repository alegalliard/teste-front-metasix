const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send("Home");
});

server.listen(3333);
