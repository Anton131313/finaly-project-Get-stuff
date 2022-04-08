const { Product } = require('../../db/models');

const allProducts = async (req, res) => {
  const products = await Product.findAll({ raw: true });
  console.log(products);
};

module.exports = {
  allProducts,
};
