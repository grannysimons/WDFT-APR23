const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 14; //recommended values: 10-14

const User = require("../models/User.model");

// const isLoggedIn = require("../middleware/isLoggedIn");
// const isLoggedOut = require("../middleware/isLoggedOut");

let {isLoggedIn, isLoggedOut} = require("../middleware/auth.middleware");

router.get("/signup", isLoggedOut, (req, res, next) => {
  res.render("signup");
});

router.post("/signup", isLoggedOut, (req, res, next) => {
  //signup process

  let { username, password, passwordRepeat } = req.body;

  if(username == "" || password == "" || passwordRepeat == "") {
    let data = {
      errorMessage: "there is information missing!", 
      user: {
        username,
        password,
        passwordRepeat
      }
    }
    res.render("signup", data);
    return;

  } else if(password != passwordRepeat) {
    let data = {
      errorMessage: "passwords should match!", 
      user: {
        username,
        password,
        passwordRepeat
      }
    }
    res.render("signup", data);
    return;

  } 

  User.find({username}) //returns an array
  .then(users => {
    if(users.length != 0) {
      //username exists in the db
      let data = {
        errorMessage: "username already exists", 
        user: {
          username,
          password,
          passwordRepeat
        }
      }
      res.render("signup", data);
      return;
    }

    //we need package bcryptjs
    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordEncrypted = bcrypt.hashSync(password, salt);

    console.log("password encrypted: ", passwordEncrypted);
    User.create({username , password: passwordEncrypted})
    .then(result => {
      res.redirect("/users/login");
    })
    .catch(err => next(err))
  })
})

router.get("/login", isLoggedOut, (req, res, next) => {
  res.render("login");
});

router.post("/login", isLoggedOut, (req, res, next) => {
  //login process
  let {username, password} = req.body;

  if(username == "" || password == "") {
    res.render("login", {errorMessage: "information missing"});
    return;
  }

  User.find({username})
  .then(users => {
    if(users.length == 0) {
      res.render("login", {errorMessage: "wrong credentials"});
      return;
    }
    let userDB = users[0];
    if(bcrypt.compareSync(password, userDB.password)) {
      //SESSION STARTS HERE!!!!!!!
      req.session.currentUser = username; //currentUser can contain any information about the user!!!!
      // req.session.currentUser = { username, password, email, preferences: }
      // req.session.cart = ["patatas", "mongetes", "pepinos", "pebrots"]
      res.redirect("/users/profile")
    } else {
      res.render("login", {errorMessage: "wrong credentials"});
      return;
    }
  })
})

router.get("/profile", isLoggedIn, (req, res, next)=>{
  res.send("PROFILE OF " + req.session.currentUser);
})

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if(err) next(err);
    else res.redirect("/users/login");
  });

})

module.exports = router;
