const isAdminUser = (req, res, next) => {
    // if(req.session.currentUser && req.session.currentUser.role == "admin") next();

    if(req.session.currentUser?.role == "admin") next();
    else res.redirect("/users/login");
  }

  module.exports = isAdminUser;