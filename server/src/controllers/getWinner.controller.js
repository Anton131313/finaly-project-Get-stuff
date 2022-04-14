const {
  User, Bidding, User_Bidding,
} = require('../../db/models');

const getWinner = async (req, res) => {
  console.log('<===================>');
  const product_id = req.params.id;
  const currBidding = await Bidding.findOne({
    where: {
      product_id,
    },
    attributes: ['price'],
  });
  const winner_Bidding = await User_Bidding.findOne({
    where: {
      users_bid: currBidding.price,
    },
    attributes: ['user_id'],
  });
  const currUser = await User.findOne({
    where: {
      id: winner_Bidding.user_id,
    },
  });
  const winner = {
    user_id: winner_Bidding.user_id,
    name: currUser.name,
    phone: currUser.phone,
    photo: currUser.photo,
    email: currUser.email,
    price: currBidding.price,
  };
  res.json(winner);
};

module.exports = { getWinner };
