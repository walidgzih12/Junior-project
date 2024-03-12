const rout=require('../controller/index.js');
const express = require("express");
const router = express.Router();
router.get('/user/:username', rout.getUserByUsername);
router.post('/postusers',rout.postUser)
router.post('/login',rout.loginUser)

module.exports=router;    