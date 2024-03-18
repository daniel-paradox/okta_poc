const oktaStrategy = require("../okta/oktaStrategy")
var passport = require('passport');

passport.use('oidc', oktaStrategy)

passport.serializeUser((user, next) => {
    next(null, user);
});
  
passport.deserializeUser((obj, next) => {
    next(null, obj);
});

module.exports = passport