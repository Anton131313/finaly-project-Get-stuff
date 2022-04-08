const { Router } = require('express');
const allProductsController = require('../controllers/allProducts.controller');

const allProductsRouter = Router();

allProductsRouter.get('/', allProductsController.allProducts);

module.exports = allProductsRouter;
