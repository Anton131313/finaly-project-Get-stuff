const { Bidding, Product, Photo } = require('../../db/models');

const addBidding = async (req, res) => {
  // console.log('ya tut', req.file);
  // console.log(req.body);
  const {
    title,
    info,
    category_id,
    // condition_id, // не приходит
    location,
    price, // не приходит
    price_step,
    end_bidding,
  } = await req.body;

  const user_id = 1; // временный хардкод

  const newProduct = await Product.create({
    title,
    info,
    user_id,
    category_id, // : Number(category_id),
    condition_id: 2, // : 3,
    location,
  });
  console.log(newProduct);
  if (newProduct) {
    const newBidding = await Bidding.create({
      product_id: newProduct.id,
      price, // : '500',
      price_step,
      end_bidding,
    });
    const newPhoto = await Photo.create({
      product_id: newProduct.id,
      photo: req.file.originalname,
    });
    res.sendStatus(200);
  }
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
