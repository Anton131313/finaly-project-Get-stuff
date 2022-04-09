const {
  Category, Product, Bidding, User, Useridding,
} = require('../../db/models');

const myBidding = async (req, res) => {
  const user_id = 1;
  // const user_id = req.session.user.id;
  const RserBidding = await Product.findAll(
    {
      include:
      [{ model: Bidding, required: true, include: [{ model: User, where: { id: user_id } }] }],
      raw: true,
    },
  );
  console.log(RserBidding);
};

module.exports = {
  myBidding,
};

/*
const RserBidding = await User.findAll(
    {
      where: {
        id: user_id,
      },
      include:
      [Bidding],
      raw: true,
    },
  );
*/
