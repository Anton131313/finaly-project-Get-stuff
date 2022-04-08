const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  const user_id = req.session.user.id;
  const {
    title,
    info,
    category_id,
    condition_id,
    location,
    price,
    price_step,
    end_bidding,
  } = req.body;

  const newBidding = await Bidding.create({
    price,
    price_step,
    end_bidding,
  });

  // const truBidding = await Bidding.findOne({ where: { end_bidding }, raw: true });
  // const bidding_id = newBidding.id;

  const newProduct = await Product.create({
    title,
    info,
    user_id,
    category_id,
    bidding_id: newBidding.dataValues.id,
    condition_id,
    location,
  });
};

module.exports = {
  addBidding,
};
