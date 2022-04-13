const { Router } = require('express');
const auctionController = require('../controllers/allUserBidding.controller');

const allUserBidding = Router();

allUserBidding.get('/:id', auctionController.userBidding);

module.exports = allUserBidding;
