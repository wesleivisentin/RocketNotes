const AppError = require('../utils/AppError');
const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")


class UserAvatarController {
    async update(req, res) {
        const user_id = req.user.id;
        const avatarFilename = req.file.filename;

        const diskStorage = new DiskStorage()

        const user = await knex("users")
    .where({ id: user_id }).first();

    if(!user) {
        throw new AppError("Apenas usuário autenticados podem mudar a foto de perfil", 401)
    }

    if(user.avatar) {
        await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilename)
    user.avatar = filename;

    await knex("users").update(user).where({ id: user_id });

    return res.json(user)
    }
}

module.exports = UserAvatarController