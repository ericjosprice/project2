var passport = require("passport");

var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
    {
      passwordField: "password"
    },
    function(name, password, done) {
      db.User.findOne({
        where: {
          name: name
        }
      }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // console.log("found em")
        return done(null, dbUser);
      });
    }
  ));
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
  module.exports = passport;
  