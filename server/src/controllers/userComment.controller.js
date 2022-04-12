const { Comment_User_Product, User } = require('../../db/models');

const addComment = async (req, res) => {
  // const user_id = req.session.id;
  const user_id = 1;
  const product_id = Number(req.params.id);
  const { text } = req.body;

  const newComment = await Comment_User_Product.create({
    user_id,
    product_id,
    text,
  });
  const CurUser = await User.findOne({
    where: {
      id: user_id,
    },
  });
  const userComment = {
    nameUser: CurUser.name,
    textComment: newComment.text,
    createdAt: newComment.createdAt,
  };
  return res.json(userComment);
};

const getComment = async (req, res) => {
  const product_id = Number(req.params.id);
  try {
    const allComment = await Comment_User_Product.findAll({
      where: { product_id },
      raw: true,

    });
    if (allComment.length === 0) {
      res.sendStatus(404);
    }
    //  ниже небольшой хард код  =)
    for (let i = 0; i < allComment.length; i++) {
      const currUser = await User.findOne(
        {
          where: { id: allComment[i].user_id },
          raw: true,
        },
      );
      const userName = currUser.name;
      allComment[i].name = userName;
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
