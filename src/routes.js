const { Router } = require('express');
const UserModel = require('./apps/models/Users');
const routes = new Router();

routes.get('/health', (req, res) => {
    return res.send({ message:'Conectado com Sucesso!' });
});


routes.get('/users', async (req, res) =>{
    const allUsers = await UserModel.findAll();
    res.send({ users: allUsers });
});

module.exports = routes;