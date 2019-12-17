const express = require('express');
const PerguntasController = require('./controllers/PerguntasController');
const routes = express.Router();



routes.get('/', (req, res) => {
    return res.send("Home");
});

routes.get('/faq', PerguntasController.store);

module.exports = routes;