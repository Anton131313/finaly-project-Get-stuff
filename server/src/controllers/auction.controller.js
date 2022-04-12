const {
  Product,
  Category,
  Condition,
  Bidding,
  User,
} = require('../../db/models');

const getAuction = async (req, res) => {
  // const user_id = req.session.user.id;
  // console.log(req.params, '======', user_id );
  const { id } = req.params;
  try {
    const auctionProduct = await Product.findOne({
      where: { id },
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
          attributes: ['end_bidding', 'price', 'price_step'],
        }],
      raw: true,
    });
    if (auctionProduct.length === 0) {
      return res.sendStatus(404);
    }
    res.json(auctionProduct);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  getAuction,
};
