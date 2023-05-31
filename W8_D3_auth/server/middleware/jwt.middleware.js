const { expressjwt: jwt } = require('express-jwt');

const isAuthenticated = jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: 'payload'
})

module.exports = isAuthenticated;