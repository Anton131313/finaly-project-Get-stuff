const {
  Product, Photo, Category, Condition,
} = require('../../db/models');

const allProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Photo,
        attributes: ['photo', 'id'],
      },
      {
        model: Category,
        attributes: ['nameCategory'],
      },
      {
        model: Condition,
        attributes: ['nameCondition'],
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
