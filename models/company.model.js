var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,
    industry: String,
    description: String,
    site: Array,
    address: String,
    vacancy: Array,
    lang: String

});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;