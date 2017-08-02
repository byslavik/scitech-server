var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    "name": String,
    "sphere": String,
    "goal": String,
    "methods": String,
    "results": String,
    "recommendation": String,
    "use": String,
    "tags":  Array,
    "author": Array,
    "date": Date,
    "type": String,
    "download": String,
    "video": Array,
    "presentation": Array,
    "problem": String,
    "solution": String,
    "demo": Array,
    "contacts": Array,
    "needTofind": Array,
    "skills": Array,
    "materials": Array,
    "info": Array,
    "lang": String

});

var Card = mongoose.model('Card', researchSchema);

module.exports = Card;
