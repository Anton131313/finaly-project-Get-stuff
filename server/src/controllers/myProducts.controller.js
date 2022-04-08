const { Product } = require('../../db/models');

const myProducts = async (req, res) => {
  const user_id = 3;
  // const user_id = req.session.user.id;
  const UserProducts = await Product.findAll({ where: { user_id }, raw: true });
  console.log(UserProducts);
};

module.exports = {
  myProducts,
};
