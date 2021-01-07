const express = require('express');

const router = express.Router();//calling router
const homeController = require('../controllers/home_controller')//accessing controller
console.log("router loaded");
router.get('/', homeController.home);//for accessing url and calling the function from controller which would be displayed in browser
router.get('/page',homeController.page);

module.exports = router; 