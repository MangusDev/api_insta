const { Router } = require('express');
const UserController = require('./apps/controllers/UserController');
const routes = new Router();

routes.get('/health', (req, res) => res.send({
    message:'Conectado com Sucesso!',
}));


routes.post('/user', UserController.create);

module.exports = routes;