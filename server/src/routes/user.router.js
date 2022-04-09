const { Router } = require('express');
const { getUser } = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/:id', getUser);

module.exports = userRouter;
