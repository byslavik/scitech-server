var mongoose = require('mongoose');
var Company = require('./models/company.model');
var People = require('./models/people.model');
var Card = require('./models/card.model');


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
var port = process.env.PORT || 8084;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {

    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });

// aaron.save(function (err) {
//   if (err) return handleError(err);
//
//   var story1 = new Story({
//     title: "Once upon a timex.",
//     _creator: aaron._id    // assign the _id from the person
//   });
//
//   story1.save(function (err) {
//     if (err) return handleError(err);
//     // thats it!
//   });
// });

// var card = new Card()

















//Card
router.route('/cards')
    .get(function(req, res) {
        Card
          .find({})
          .populate("_author",  ['name', 'description'])
          .exec(function(err, cards) {
              if (err){
                  res.send(err);
              }

              res.json(cards);
          })
    });
router.route('/card/:id')
    .get(function(req, res) {
        var query = {"_id": req.params.id };

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
router.route('/persons')
    .get(function(req, res) {

        People.find({},
            function(err, person) {
                if (err){
                    res.send(err);
                }
                // res.send(Person);
                res.json(person);
            });
    });
router.route('/person/:id')
    .get(function(req, res) {
        console.log('lets find smth', req.params.lang, req.params.id);

        People.find({ "_id": req.params.id })
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


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
