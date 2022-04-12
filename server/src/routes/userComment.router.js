const { Router } = require('express');
const userCommentController = require('../controllers/userComment.controller');
//const checkAuth = require('../middlewares/checkAuth');

const userCommentRouter = Router();

userCommentRouter.post('/:id', userCommentController.addComment);
userCommentRouter.get('/:id', userCommentController.getComment);

module.exports = userCommentRouter;
