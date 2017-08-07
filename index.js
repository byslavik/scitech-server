var mongoose = require('mongoose');
var Company = require('./models/company.model');
var People = require('./models/people.model');
var Card = require('./models/card.model');
var LangVars = require('./models/langVars.model');


var Schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;

var options = {
    useMongoClient: true
};

var mongodbUri = 'mongodb://scitechuser:scitech2017@ds119533.mlab.com:19533/heroku_q6vt1794';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', function(err) {
  console.log('noup', err)
});

conn.once('open', function() {
  console.log('horaay... I`m connected')
});


var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
var port = process.env.PORT || 8085;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {

    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});



//Card
router.route('/cards/:lang')
    .get(function(req, res) {
        Card
          .find({"lang": req.params.lang})
          .populate("_author",  ['name', 'description'])
          .exec(function(err, cards) {
              if (err){
                  res.send(err);
              }

              res.json(cards);
          })
    });
router.route('/card/:lang/:id')
    .get(function(req, res) {
        var query = {"_id": req.params.id, "lang": req.params.lang };

        Card
            .find(query)
            .populate("_author", ['name', 'description'])
            .exec(function(err, card) {
                if (err){
                    res.send(err);
                }

                res.json(card);
            })
    });


//Persons
router.route('/persons/:lang')
    .get(function(req, res) {

        People.find({"lang": req.params.lang},
            function(err, person) {
                if (err){
                    res.send(err);
                }
                // res.send(Person);
                res.json(person);
            });
    });
router.route('/person/:lang/:id')
    .get(function(req, res) {
        console.log('lets find smth', req.params.lang, req.params.id);

        People.find({ "_id": req.params.id, "lang": req.params.lang })
        .populate("publications", ['name'])
        .exec(
            function(err, person) {
                if (err){
                    res.send(err);
                }
                // res.send(Person);
                res.json(person);
            });
    });

    router.route('/search/:lang/:word')
        .get(function(req, res) {


            Card.find({ "name": { '$regex' : req.params.word, '$options' : 'i' }, "lang": req.params.lang })
            .populate("_author", ['name'])
            .exec(
                function(err, person) {
                    if (err){
                        res.send(err);
                    }
                    // res.send(Person);
                    res.json(person);
                });
        });

router.route('/langvars/:lang')
    .get(function(req, res) {


        LangVars.find({"lang": req.params.lang })
        .exec(
            function(err, lang) {
                if (err){
                    res.send(err);
                }
                // res.send(Person);
                res.json(lang);
            });
    });


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
