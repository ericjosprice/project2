var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // app.get("/", function (req, res) {
  //   if (req.user) {
  //     res.redirect("/login");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });
  
  app.get("/", function(req, res) {
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/bands", isAuthenticated, function (req, res) {
    res.send("band");
  });

  app.get("/venues", isAuthenticated, function (req, res) {
    res.send("venue");
  });

  app.get("/venueSign", isAuthenticated, function (req, res) {
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, "../public/html/venueCreateProfile.html"));
  });

  app.get("/bandSign", isAuthenticated, function (req, res) {
    // console.log(req.user);
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, "../public/html/artistCreateProfile.html"));
  });

};
