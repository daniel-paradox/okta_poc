var passport = require('../auth/passport');
const router = require('express').Router();

router.use('/login', passport.authenticate('oidc'));

router.use('/authorization-code/callback',
  passport.authenticate('oidc', { failureMessage: true, failWithError: true }),
  (req, res) => {
    res.redirect('/');
  }
);

router.post('/logout', (req, res) => {
    req.logOut(err => {
       if (err) { return next(err); }
       
       res.redirect('/');
       req.session.destroy();
    });
});


module.exports = router;