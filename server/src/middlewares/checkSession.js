const checkSession = (req, res, next) => {
  res.locals = req.session;
  // console.log('<=========checkSession===========>\n', req.session, req.sessionID);

  return next();
};

module.exports = checkSession;
