const {
  Product, Bidding, Category, Condition,
} = require('../../db/models');

const allProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['nameCategory'],
        },
        {
          model: Condition,
          attributes: ['nameCondition'],
        },
        {
          model: Bidding,
          attributes: ['end_bidding'],
        }],
      raw: true,
    }).catch((e) => e);
    if (products.length === 0) {
      return res.sendStatus(404);
    }
    res.json(products);
  } catch (error) {
    return res.sendStatus(500);
  }
};
module.exports = {
  allProducts,
};
