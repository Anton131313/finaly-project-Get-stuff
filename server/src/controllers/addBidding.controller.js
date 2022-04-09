const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  console.log('<===========1111111111111111111111111==========>');
  // const user_id = req.session.user.id;
  console.log(req.body, '<=====================>');
  // const {
  //   title,
  //   info,
  //   category_id,
  //   condition_id,
  //   location,
  //   price,
  //   price_step,
  //   end_bidding,
  //   // 'ТУТ ДОЛЖЕН БЫТЬ ФАЙЛ С ФОТО ИЗ РЕГ-БАДИ',
  // } = req.body;

  // const newBidding = await Bidding.create({
  //   price,
  //   price_step,
  //   end_bidding,
  // });

  // const newProduct = await Product.create({
  //   title,
  //   info,
  //   user_id,
  //   category_id,
  //   bidding_id: newBidding.dataValues.id,
  //   condition_id,
  //   location,
  // });

  // const newPhoto = await Photo.create({
  //   product_id: newProduct.dataValues.id,
  //   photo: `/img/${req.file.originalname}`, // ПРОВЕРИТЬ!
  // });
};

module.exports = {
  addBidding,
};
