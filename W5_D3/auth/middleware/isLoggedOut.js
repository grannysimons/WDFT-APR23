const isLoggedOut = (req, res, next) => {
    console.log("hi from middleware 1!!!!!");
    if(req.session.currentUser) {
      //user is logged in
      res.redirect("/users/profile");
    }
    else {
      //user is NOT logged in
      next();
    }
  }

  module.exports = isLoggedOut;