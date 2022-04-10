const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  console.log(req.body.formData);

  const user_id = 1; // временный хардкод
  const {
    title,
    info,
    category_id,
    // condition_id,
    location,
    // price,
    price_step,
    end_bidding,
  } = await req.body.formData;

  const newProduct = await Product.create({
    title,
    info,
    user_id,
    category_id: Number(category_id),
    condition_id: 3,
    location,
  });
  console.log(newProduct);

  // const newBidding = await Bidding.create({
  //   newProduct.dataValues.id
  //   price,
  //   price_step,
  //   end_bidding,
  // });
  // console.log(newBidding);

  // const newPhoto = await Photo.create({
  //   product_id: newProduct.dataValues.id,
  //   photo: 'Тут типа фото лежит',
  // });
};

module.exports = {
  addBidding,
};
