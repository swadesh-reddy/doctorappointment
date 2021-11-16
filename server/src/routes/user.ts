var express = require('express');
var userrouter = express.Router();
import { UserController } from "../controllers/user";
import  ProductCategoryController  from '../controllers/productcategory'
var usercontroller = new UserController()
// var upload = require('../_helpers/multer');
var productCategoryController = new ProductCategoryController();
userrouter.post('/register', usercontroller.register);
userrouter.post('/login', usercontroller.authenticate);
userrouter.post('/addproductcategory',productCategoryController.addCategory)
// router.get('/getProfile', usercontroller.)
// router.post('/updateuserpic',  upload.single('avatar'), usercontroller)
export default userrouter;