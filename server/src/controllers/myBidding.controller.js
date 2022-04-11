const { Product, Bidding, User } = require('../../db/models');

const myBidding = async (req, res) => {
  // const user_id = 4;
  const user_id = req.session.user.id;
  try {
    const Useridding = await Product.findAll(
      {
        include:
      [{
        model: Bidding,
        required: true,
        include:
            [{
              model: User,
              where: { id: user_id },
            }],
      }],
        raw: true,
      },
    );
    if (Useridding.length === 0) {
      return res.sendStatus(404);
    }
    res.json(Useridding);
  } catch (error) {
    return res.sendStatus(500);
  }

  // console.log(Useridding);
};

module.exports = {
  myBidding,
};

/*
  const Useridding = await Product.findAll(
    {
      include:
      [{ model: Bidding, required: true, include: [{ model: User, where: { id: user_id } }] }],
      raw: true,
    },
  );
*/
