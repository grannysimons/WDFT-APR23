const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) next();
    else res.redirect("/users/login");
}

module.exports = isLoggedIn;