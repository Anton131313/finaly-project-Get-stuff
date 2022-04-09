const {
  Category, Product, Bidding, User, User_Bidding,
} = require('../../db/models');

const myBidding = async (req, res) => {
  const user_id = 1;
  // const user_id = req.session.user.id;
  const UserBidding = await User.findAll(
    {
      where: {
        id: user_id,
      },
      include:
      [Bidding],
      rav: true,
    },
  );
  // const a = await Bidding.
  console.log(UserBidding);
};

module.exports = {
  myBidding,
};

// const alcohol = await Alcohol.findAll({ include: [Type_of_alcohol, { model: Company, include: [Country] }] });

/*
    {
      where: {
        id: user_id,
      },
      include:
      [Bidding],
      through: { attributes: [] },
    },
 */
