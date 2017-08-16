var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    "name": Array,
    "image": String,
    "description": Array,
    "contacts": Array,
    "sphere": Array,
    "specialization": Array,
    "publications": [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    "patents": Array,
    "projects": Array,
    "lang": String

});

var People = mongoose.model('People', peopleSchema);

module.exports = People;
