const { Router } = require('express');
const auctionController = require('../controllers/auction.controller');

const auctionRouter = Router();

auctionRouter.get('/bidding/:id', auctionController.getAuction);

module.exports = auctionRouter;
