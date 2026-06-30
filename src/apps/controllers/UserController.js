const Users = require('../models/Users');

class UserController {
    async create(req, res){
        const verifyUser = await Users.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (verifyUser){
            return res.status(400).json({ message: 'Usuario existe' });
        }
        const user = await Users.create(req.body);
        if(!user) {
            return res.status(400).json({ message: 'Falha ao criar usuario' });
        }
        return res.send({ message: "Usuario criado!" });
    }
}

module.exports = new UserController();