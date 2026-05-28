const { Router } = require('express');

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.send({message:'Conectado com Sucesso!'});
});

routes.get('showuser', (req, res) =>{
    
})

module.exports = routes;