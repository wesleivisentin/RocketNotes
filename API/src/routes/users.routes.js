const { Router } = require('express')
const uploadConfig = require('../configs/upload')

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const multer = require('multer')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar',  ensureAuthenticated, upload.single("avatar"), (req, res) => {

    response.json()
} )


module.exports = usersRoutes
