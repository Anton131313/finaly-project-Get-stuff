const { User } = require('../../db/models');

const getUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const currentUser = await User.findByPk(id);
    console.log(currentUser);
    res.json(currentUser);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getUser,
};
