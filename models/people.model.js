var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    "name": String,
    "image": String,
    "description": String,
    "contacts": Array,
    "sphere": String,
    "specialization": String,
    "publications": Array,
    "patents": Array,
    "projects": Array,
    "lang": String

});

var Person = mongoose.model('People', peopleSchema);

module.exports = Person;
