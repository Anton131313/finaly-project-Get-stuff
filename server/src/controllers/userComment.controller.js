const { Comment_User_Product } = require('../../db/models/comment_user_product');

// const user_id = req.session.user.id;

const addComment = async (req, res) => {
  const user_id = 4;
  const { product_id, text } = req.body;
  try {
    const newComment = await Comment_User_Product.create({
      user_id,
      product_id,
      text,
    });
    if (newComment.length === 0) {
      return res.sendStatus(520);
    }
    res.json(newComment);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getComment = async (req, res) => {
  const { product_id } = req.body;
  try {
    const allComment = await Comment_User_Product.findAll({
      where: { product_id },
    });
    if (allComment.length === 0) {
      res.sendStatus(404);
    }
    res.json(allComment);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  addComment,
  getComment,
};
