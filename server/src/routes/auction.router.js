const { Router } = require('express');
const auctionController = require('../controllers/auction.controller');

const auctionRouter = Router();

auctionRouter.get('/bidding/:id', auctionController.getAuction);

auctionRouter.post('/userBidding/:id', auctionController.postAuction);

module.exports = auctionRouter;
