const { Router } = require('express');
const addBiddingController = require('../controllers/addBidding.controller');
const upload = require('../middlewares/multerMiddlewares');

const addBiddingRouter = Router();

// addBiddingRouter.get('/', checkAuth, addBiddingController.addBidding);
addBiddingRouter.post('/', upload.single('photo'), addBiddingController.addBidding);

module.exports = addBiddingRouter;
