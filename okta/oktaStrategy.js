require('dotenv').config({ path: '.okta.env' })

var {Strategy} = require('passport-openidconnect');

const { APP_BASEURL, CLIENT_ID, CLIENT_SECRET } = process.env;

const oktaStrategy = new Strategy({
  issuer: 'https://dev-07436738.okta.com/oauth2/default',
  authorizationURL: 'https://dev-07436738.okta.com/oauth2/default/v1/authorize',
  tokenURL: 'https://dev-07436738.okta.com/oauth2/default/v1/token',
  userInfoURL: 'https://dev-07436738.okta.com/oauth2/default/v1/userinfo',
  clientID: `${CLIENT_ID}`,
  clientSecret: `${CLIENT_SECRET}`,
  callbackURL: `${APP_BASEURL}/authorization-code/callback`,
  scope: 'openid profile'
}, (issuer, profile, done) => {
  return done(null, profile);
});

module.exports = oktaStrategy;

