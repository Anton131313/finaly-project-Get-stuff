const { Router } = require('express');
const addBiddingController = require('../controllers/addBidding.controller');
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/multerMiddlewares');

const addBiddingRouter = Router();

// addBiddingRouter.get('/', checkAuth, addBiddingController.addBidding);
addBiddingRouter.post('/', upload.single('file'), addBiddingController.addBidding);

module.exports = addBiddingRouter;
