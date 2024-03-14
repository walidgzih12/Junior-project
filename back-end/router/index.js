const rout=require('../controller/index.js');
const express = require("express");
const router = express.Router();
router.get('/user/:username', rout.getUserByUsername);
router.post('/postusers',rout.postUser)
router.post('/login',rout.loginUser)
router.get('/allproducts', rout.getAllProducts);
router.post('/products', rout.postProduct);
router.get('/products/:category', rout.getProductsByCategory);
router.get('/products/user/:userId', rout.getProductsByUserId);
router.put('/products/:productId', rout.updateProductById);
router.delete('/products/:productId', rout.deleteProductById); 


module.exports=router;      
