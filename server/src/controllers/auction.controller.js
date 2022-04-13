const {
  Product,
  Category,
  Condition,
  Bidding,
  User,
  User_Bidding,
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

const postAuction = async (req, res) => {
  // const user_id = req.session.user.id;
  const user_id = 1;
  const product_id = Number(req.params.id);
  const { price } = req.body;

  // currUserBidding тут мы проверяем есть ли у юзера ставки по конкретному продукту
  const currUserBidding = await Bidding.findOne({
    where: {
      product_id,
    },
    include: [
      {
        model: User,
        where: {
          id: user_id,
        },
        required: true,
        attributes: ['name'],
      },
    ],
    raw: true,
  });
  // тут пишем условие: если ставок нет то создаём ставку и обновляем прайс у продукта
  if (currUserBidding === null) {
    // тут нам необходимо узнать ID Bidding
    const currBidding = await Bidding.findOne({
      where: {
        product_id,
      },
      attributes: ['id'],
    });
    // создаём новую запись в базе
    const newUserBidding = await User_Bidding.create({
      bidding_id: currBidding.id,
      user_id,
      users_bid: price,
    });
    // обновляем прайс у продукта
    const updatePriceBidding = await Bidding.update(
      {
        price,
      },
      {
        where:
      {
        id: newUserBidding.bidding_id,
      },
      },
    );
    // в случае если у юзера уже есть ставки по конкретному продукту
  } else {
    // обновляем старую ставку на новую
    const updateUserBidding = await User_Bidding.update(
      {
        users_bid: price,
      },
      {
        where:
      {
        bidding_id: currUserBidding.id,
        user_id,
      },
      },
    );
    // обновляем прайс у продукта
    const updatePriceBidding = await Bidding.update(
      {
        price,
      },
      {
        where:
      {
        id: currUserBidding['Users.User_Biddings.bidding_id'],
      },
      },
    );
  }
  // иии всё =)
};

module.exports = {
  getAuction,
  postAuction,
};
