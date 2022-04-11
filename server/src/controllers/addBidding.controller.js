const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  console.log('<=========session}===========>\n', req.session);
  const user_id = 1; // временный хардкод
  // console.log(`==========>${req.file.originalname}<==========`);

  console.log(req.body);

  const {
    title,
    info,
    category_id,
    condition_id,
    price,
    price_step,
    end_bidding,
    location,
  } = await req.body;

  const newProduct = await Product.create({
    title,
    info,
    user_id,
    category_id: Number(category_id),
    condition_id: Number(condition_id),
    location,
    img: req.file.originalname,
  });

  const newBidding = await Bidding.create({
    product_id: newProduct.id,
    price,
    price_step,
    end_bidding,
  });

  // const newPhoto = await Photo.create({
  //   product_id: newProduct.id,
  //   photo: req.file.originalname,
  // });
};
module.exports = {
  addBidding,
};
