const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const sql_user = require('../db_connection/sql_user');

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },(accessToken, refreshToken, profile, done) => {
    // console.log("accessToken : ", accessToken);
    // console.log("refresh token : ", refreshToken);
    console.log("profile : ", profile);
    sql_user();
    //done(null,"true");// We have to provide two arg. One is error saying something went wrong(here giving null),  
  })
);