const {
  User_Bidding, Bidding,
} = require('../../db/models');

const userBidding = async (req, res) => {
  const product_id = Number(req.params.id);
  const currBidding = await Bidding.findOne({
    where: {
      product_id,
    },
    attributes: ['id'],
    raw: true,
  });
  // res.json(currBidding);
  const allUserBidding = await User_Bidding.findAll({
    where: {
      bidding_id: currBidding.id,
    // bidding_id: 3,
    },
    order: [
      ['id', 'DESC'],
    ],
    raw: true,
  });

  res.json(allUserBidding);
};
module.exports = { userBidding };
