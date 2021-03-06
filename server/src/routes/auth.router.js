const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const checkAuth = require('../middlewares/checkAuth');

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/login', authController.signIn);
authRouter.get('/logout', authController.signOut);
authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = authRouter;
