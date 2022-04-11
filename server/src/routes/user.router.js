const { Router } = require('express');
const { getUser, editUser } = require('../controllers/user.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/multerMiddlewares');

const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.patch('/:id', upload.single('file'), checkAuth, checkAuthor, editUser);

module.exports = userRouter;
