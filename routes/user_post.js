const express= require('express');
const router = express.Router();
const userController = require("../controllers/post_controller");
router.get("/post",userController.posts);


module.exports = router;