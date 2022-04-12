const { Router } = require('express');
const allProductsController = require('../controllers/allProducts.controller');

const allProductsRouter = Router();

allProductsRouter.get('/', allProductsController.allProducts);
allProductsRouter.get('/:word', allProductsController.getProducts);

module.exports = allProductsRouter;
