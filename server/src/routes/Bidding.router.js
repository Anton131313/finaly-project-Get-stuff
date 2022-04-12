const { Router } = require('express');
const BiddingController = require('../controllers/Bidding.controller');
// const deleteBiddingController = require('../controllers/deleteBidding.controller')
const checkAuth = require('../middlewares/checkAuth');
const upload = require('../middlewares/multerMiddlewares');

const biddingRouter = Router();
// biddingRouter.post позволяет юзеру добавить Лот
biddingRouter.post('/', upload.single('file'), BiddingController.addBidding);
// biddingRouter.delete позволяет юзеру (владельцу) удалить Лот
biddingRouter.delete('/:id', BiddingController.deleteBidding);
// biddingRouter.get позволяет юзеру посмотреть все торги в которых он учавствует
biddingRouter.get('/', BiddingController.myBidding);

module.exports = biddingRouter;
