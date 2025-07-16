const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.get('/:id', userController.getUserById);

module.exports = router;
