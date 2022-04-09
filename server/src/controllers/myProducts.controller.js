const { Product } = require('../../db/models');

const myProducts = async (req, res) => {
  const user_id = 3;
  // const user_id = req.session.user.id;
  try {
    const UserProducts = await Product.findAll({ where: { user_id }, raw: true });
    if (UserProducts.length === 0) {
      return res.sendStatus(404);
    }
    res.json(UserProducts);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  myProducts,
};
