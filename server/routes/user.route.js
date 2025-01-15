import express from 'express';
import { UserController } from '../controllers/index.js';

const userRoute = express.Router();

userRoute.post('/register', UserController.userRegister);
userRoute.post('/login', UserController.userLogin);
userRoute.post('/logout', UserController.userLogout);

export default userRoute;
