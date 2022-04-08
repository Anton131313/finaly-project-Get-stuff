const { Router } = require('express');
const myBiddingController = require('../controllers/myBidding.controller');

const myBiddingRouter = Router();

myBiddingRouter.get('/', myBiddingController.myBidding);

module.exports = myBiddingRouter;
