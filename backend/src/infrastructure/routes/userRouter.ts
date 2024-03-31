import express from "express";
import { userProfileUpload,propertyUpload } from "../middleware/multer";
const router = express.Router() 

import userController from '../../controller/userController'
import UserUseCase from "../../useCase/UserUseCase";
import UserRepository from "../repository/userRepository";

const repository = new UserRepository()
const userCase = new UserUseCase(repository)
const controller = new userController(userCase) 

router.post('/signup_user',userProfileUpload.single('Profile'),controller.signUpUser)
router.post('/signup_property',propertyUpload.fields([{name:'license'},{name:'PropertyProfile'}]),controller.signUpProperty
);


export default router 