var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    "name": Array,
    "industry": Array,
    "description": Array,
    "site": Array,
    "address": String,
    "vacancy": Array,
    "lang": String

});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
