const { Router } = require('express');
const myProductsController = require('../controllers/myProducts.controller');

const myProductsRouter = Router();

myProductsRouter.get('/', myProductsController.myProducts);
module.exports = myProductsRouter;
