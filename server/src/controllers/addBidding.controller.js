const { Bidding, Product, Photo } = require('../../db/models');
const addBidding = async (req, res) => {
  const user_id = 1; // временный хардкод
  console.log(req.body)
  // console.log(`<==========${req.session.user}==========>`);
  // console.log(`==========>${req.file.originalname}<==========`);
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
  });
  const newBidding = await Bidding.create({
    product_id: newProduct.id,
    price,
    price_step,
    end_bidding,
  });
  const newPhoto = await Photo.create({
    product_id: newProduct.id,
    photo: req.file.originalname,
  });
  // const {
  //   title,
  //   info,
  //   category_id,
  //   condition_id, // не приходит
  //   location,
  //   price, // не приходит
  //   price_step,
  //   end_bidding,
  // } = await req.body; // .formData;
  // let newProduct;
  // try {
  //   try {
  //     newProduct = await Product.create({
  //       title,
  //       info,
  //       user_id,
  //       category_id, // : Number(category_id),
  //       condition_id, // : 3,
  //       location,
  //     });
  //   } catch (error) {
  //     res.json({ message: 'Не удалось занести продукт в базу данных' });
  //   }
  //   try {
  //     const newBidding = await Bidding.create({
  //       product_id: newProduct.id,
  //       price, // : '500',
  //       price_step,
  //       end_bidding,
  //     });
  //   } catch (error) {
  //     res.json({ message: 'Не удалось открыть торги' });
  //   }
  //   try {
  //     const newPhoto = await Photo.create({
  //       product_id: newProduct.id,
  //       photo: req.file.originalname,
  //     });
  //   } catch (error) {
  //     res.json({ message: 'Не сохранить фотографию' });
  //   }
  // } catch (error) {
  //   res.json({ message: 'чёт пошло не так' });
  // }
};
module.exports = {
  addBidding,
};
