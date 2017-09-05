var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    "name": Array,
    "sphere": Array,
    "goal": Array,
    "methods": Array,
    "results": Array,
    "recommendation": Array,
    "use": Array,
    "tags":  Array,
    "_author": [{type: String, ref: 'People', required: false }],
    "date": Date,
    "type": String,
    "download": String,
    "video": String,
    "presentation": String,
    "problem": Array,
    "solution": Array,
    "demo": String,
    "stage": Array,
    "contacts": String,
    "needTofind": Array,
    "skills": Array,
    "style": String,
    "materials": Array,
    "info": Array,
    "customAuthor": Array,
    "creationDate": Date,
    "tenderDeadline": Date,
    "tenderReward": String,
    "status": Array,
    "place": Array,
    "regLink": String,
    "infoLink": String,
    "description": String
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
