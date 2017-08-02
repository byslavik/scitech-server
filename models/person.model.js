var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
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

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
