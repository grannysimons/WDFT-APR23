module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    // res.status(404).render("not-found");
    console.log("FIRST MIDDLEWARE");
    next("BUUUUUUU");
  });

  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    console.log("hi from second middleware");
    res.send("second MW!!!")
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).render("error");
    }
  });
};
