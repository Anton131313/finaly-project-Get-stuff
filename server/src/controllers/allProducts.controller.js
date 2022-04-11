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

const getProducts = async (req, res) => {
  const { word } = req.params;
  try {
    const data = await Product.findAll({ where: { title: word } });
    return res.json({ data });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  allProducts, getProducts,
};
