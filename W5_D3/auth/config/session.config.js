const session = require("express-session");
const mongoStore = require("connect-mongo");

module.exports = (app) => {
    app.set("trust proxy", 1);
    app.use(session({
        secret: process.env.SESS_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            //maxAge: 60000   //temps de vida de la cookie i de l'id (ms)
        },
        store: mongoStore.create({mongoUrl:process.env.MONGODB_URI || "mongodb://localhost:27017/auth"})
    }));

    // app.use((req, res, next)=>{
    //     req.user = "Mariona";
    //     next();
    // })
    // app.use((req, res, next)=>{
    //     console.log("req.user: ", req.user);
    //     console.log("req.session: ", req.session);
    //     next();
    // })
}