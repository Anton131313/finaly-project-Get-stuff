const { Router } = require('express');
const BiddingController = require('../controllers/Bidding.controller');
// const deleteBiddingController = require('../controllers/deleteBidding.controller')
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/multerMiddlewares');

const biddingRouter = Router();

biddingRouter.post('/', upload.single('file'), BiddingController.addBidding);
biddingRouter.delete('/:id', BiddingController.deleteBidding);

module.exports = biddingRouter;
