const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/add", (req, res, next) => {
  next()
  // User.findById("askajljda")
  // .then(result => {
  //   res.render("index");
  // })
  // .catch(err => next(err))
});
//  localhost:3003/posts/add

router.post("/:postId/update", (req, res, next)=>{
  res.send("hi");
})
// localhost:3003/jhf73jbs7392384kjfsd/update

module.exports = router;
