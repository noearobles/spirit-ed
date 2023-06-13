
const express = require('express')
const usersController = require('../controllers/users')
const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/create', checkJwt, usersController.createUser)

router.put('/:id', checkJwt, usersController.updateUserById)

router.delete('/:first_name', checkJwt, usersController.deleteUserByFirstName)




module.exports = router