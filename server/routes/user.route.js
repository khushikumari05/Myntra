const express = require("express");
const userRegistration = require("../controllers/user.controller");
const UserModel = require("../models/user.model");
const verifyEmailController = require("../controllers/verifyEmailController");
const loginController = require("../controllers/loginController");
const auth =  require('../middleware/auth.middleware');
const logoutController = require("../controllers/logoutController");

const userRouter = express.Router();

userRouter.post('/register',userRegistration);
userRouter.post('/verify-email', verifyEmailController);
userRouter.post('/login',loginController);
userRouter.get('/logout', auth, logoutController);

module.exports = userRouter;
