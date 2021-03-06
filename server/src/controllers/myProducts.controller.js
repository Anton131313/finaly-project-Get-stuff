const {
  Product, User, Category, Condition, Bidding,
} = require('../../db/models');

const myProducts = async (req, res) => {
  const user_id = req.session.user.id;
  // const user_id = req.session.user.id;
  try {
    const UserProducts = await Product.findAll({
      where: { user_id },
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
    });
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

/*

*/

/*
 try {
    const UserProducts = await Product.findAll({
      where: { user_id: 1 },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
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
    });
    if (UserProducts.length === 0) {
      return res.sendStatus(404);
    }
    res.json(UserProducts);
  } catch (error) {
    return res.sendStatus(500);
  }
 */
