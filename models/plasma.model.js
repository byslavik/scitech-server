var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plasmaSchema = new Schema({
    "name" : String,
    "type" : String,
    "alias" : String,
    "videoEmbedLink" : String,
    "report" : Object,
    "headerTitle" : String,
    "registration" : Object,
    "isFinished" : Boolean,
    "trainers" : Object,
    "music" : Object,
    "lang" : String,
    "about" : Object,
    "founders" : Object,
    "additional": Object
});

var Plasma = mongoose.model('Page', plasmaSchema);

module.exports = Plasma;
