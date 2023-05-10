const isAdult = (req, res, next) => {
    if (req.session.currentUser && req.session.currentUser.age >= 18) next();
    else res.redirect("/super3");
}

module.exports = isAdult;