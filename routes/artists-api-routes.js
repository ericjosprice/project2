var db = require("./models");
// eslint-disable-next-line no-undef
var app = express();

// Get route for retrieving a single post
app.get("/api/artists/:id/:date", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Venue
    db.Gig.findAll({
        where: {
            date: req.params.date,
        },
        include: [db.Venue]
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

// Get route for retrieving a single Artist
app.get("/api/artists/:id/", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Artists
    db.Artist.findOne({
        where: {
            id: req.params.id,
        }
    }).then(function (dbArtist) {
        res.json(dbArtist);
    });
});

app.post("/api/artists", function(req, res) {
  db.Artist.create(req.body).then(function(dbArtist) {
    res.json(dbArtist);
  });
});