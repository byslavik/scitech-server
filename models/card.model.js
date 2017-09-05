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
    "tenderDeadline": Date,
    "tenderReward": String,
    "creationDate": Date,
    "status": Array,
    "place": Array,
    "regLink": String,
    "infoLink": String,
<<<<<<< HEAD
    "description": String,
    "eventHolder": String
=======
    "description": String


>>>>>>> e915aef032b7bc0cfb3635be6a02bde9edf458c4
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
