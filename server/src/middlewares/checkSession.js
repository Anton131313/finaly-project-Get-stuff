const checkSession = (req, res, next) => {
  res.locals = req.session;
  console.log(res.locals, '============================', req.session);
  return next();
};

module.exports = checkSession;
