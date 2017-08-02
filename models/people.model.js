var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    "name": String,
    "image": String,
    "description": String,
    "contacts": Array,
    "sphere": String,
    "specialization": String,
    "publications": [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    "patents": Array,
    "projects": Array,
    "lang": String

});

var People = mongoose.model('People', peopleSchema);

module.exports = People;
