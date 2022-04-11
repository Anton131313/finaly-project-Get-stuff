const checkSession = (req, res, next) => {
  res.locals = req.checkSession;
  return next();
};

module.exports = checkSession;
