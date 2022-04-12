const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  const user_id = req.session.user.id;
  // console.log(req.session.user.id);
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
  
  res.json(newProduct);
  // const newPhoto = await Photo.create({
  //   product_id: newProduct.id,
  //   photo: req.file.originalname,
  // });
};

const deleteBidding = async (req, res) => {
  const user_id = req.session.user.id;
  const product_id = req.params.id;

  const currProduct = await Product.findOne({
    where:
     {
       user_id,
       id: product_id,
     },
  });
  if (currProduct) {
    await Product.destroy({ where: { id: product_id } });
    res.sendStatus(200);
  } else {
    res.json(500);
  }
};

module.exports = {
  addBidding,
  deleteBidding,
};
