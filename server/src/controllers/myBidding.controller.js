const { User_Bidding, Bidding, User } = require('../../db/models');

const myBidding = async (req, res) => {
  const user_id = 1;
  // const user_id = req.session.user.id;
  const UserBidding = await Bidding.findAll(
    {
      include:
      [User],
      raw: true,
    },
  );
  // const a = await Bidding.
  console.log(UserBidding);
};

module.exports = {
  myBidding,
};

// const alcohol = await Alcohol.findAll({ include: [Type_of_alcohol, { model: Company, include: [Country] }] });
