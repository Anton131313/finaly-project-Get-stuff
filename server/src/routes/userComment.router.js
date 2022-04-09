const { Router } = require('express');
const userCommentController = require('../controllers/userComment.controller');
const checkAuth = require('../middlewares/checkAuth');

const userCommentRouter = Router();

userCommentRouter.post('/', checkAuth, userCommentController.addComment);
userCommentRouter.get('/', userCommentController.getComment);

module.exports = userCommentRouter;
