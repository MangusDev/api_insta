require('dotenv').config();
require('./database/index');
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes);








app.listen(PORT, () => {
    console.log('Servidor na porta: ', + PORT);
});

