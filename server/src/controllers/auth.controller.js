const sha256 = require('sha256');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const {
    name, password, email, phone, photo,
  } = req.body;
  const oldUser = await User.findOne({ where: { email }, raw: true });
  if (!oldUser) {
    if (name && password && email) {
      try {
        const newUser = await User.create({
          name,
          password: sha256(password),
          email,
          phone,
          photo,
        });
        req.session.user = {
          id: newUser.id,
          name: newUser.name,
        };
        req.session.user.id = newUser.id;
        return res.json({
          id: newUser.id,
          name: newUser.name,
          email: newUser.name,
          phone: newUser.phone,
          photo: newUser.photo,
        });
      } catch (error) {
        return res.sendStatus(500);
      }
    }
  }
  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && currentUser.password === sha256(password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };
        return res.json({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.name,
          phone: currentUser.phone,
          photo: currentUser.photo,
        });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, name: user.name });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
