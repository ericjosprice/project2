// eslint-disable-next-line no-unused-vars
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    app.post("/api/loginArtist", passport.authenticate("local"), function (req, res) {
      // eslint-disable-next-line no-console
      console.log("Test after Artist authentication: " + req.user);
      res.json("/bandSign");
    });
    app.post("/api/loginVenue", passport.authenticate("local"), function (req, res) {
      // eslint-disable-next-line no-console
      console.log("Test after Venue uthentication: " + req.user);
      res.json("/venueSign");
    });

    app.post("/api/signup", function (req, res) {
      // eslint-disable-next-line no-console
      console.log(req.body);
      if (req.body.role === "artist") {
        db.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function () {
          res.redirect(307, "/api/loginArtist");
        }).catch(function (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          res.json(err);
        });
      } else if (req.body.role === "venue") {
        db.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function () {
          res.redirect(307, "/api/loginVenue");
        }).catch(function (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          res.json(err);
        });
      }
    });

    app.get("/logout", function (req, res) {
      req.logout();
      res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
      if (!req.user) {
        res.json("/");
      } else {
        res.json({
          // Include in here everything we want to return to the user
        });
      }
    });
  }