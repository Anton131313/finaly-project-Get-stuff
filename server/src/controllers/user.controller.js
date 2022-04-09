const { User } = require('../../db/models');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUser = await User.findByPk(id);
    console.log(currentUser);
    res.json(currentUser);
  } catch (error) {
    res.sendStatus(500);
  }
};

const editUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  console.log('===>', updatedFields);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      const [, updatedUser] = await User.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

module.exports = {
  getUser,
  editUser,
};
