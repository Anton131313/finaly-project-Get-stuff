const { Router } = require('express');
const addBiddingController = require('../controllers/addBidding.controller');
const checkAuth = require('../middlewares/checkAuth');

const addBiddingRouter = Router();

addBiddingRouter.post('/', checkAuth, addBiddingController.addBidding);

module.exports = addBiddingRouter;
