const { User } = require('../../db/models');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUser = await User.findByPk(id);
    res.json(currentUser);
  } catch (error) {
    res.sendStatus(500);
  }
};

const editUser = async (req, res) => {
  // console.log('ya tut', req.file.originalname);
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    // if (req.file) updatedFields.photo = req.file.originalname;
    updatedFields.photo = req.file ? req.file.originalname : req.body.file;
    try {
      if (!req.body.phone) {
        const [, updatedUser] = await User.update(
          {
            name: req.body.name, email: req.body.email, photo: req.file.originalname, phone: null,
          },
          {
            where: { id: req.session.user.id },
            returning: true,
            plain: true,
            raw: true,
          },
        );
        return res.json(updatedUser);
      }
      const [, updatedUser] = await User.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      console.log('==', error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

module.exports = {
  getUser,
  editUser,
};
