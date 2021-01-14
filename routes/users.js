const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/profile',usersController.profile);
//sign up
router.get('/signup', usersController.signUp);
//sign in 
router.get('/signin', usersController.signIn);
module.exports = router;