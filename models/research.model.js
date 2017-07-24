var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var researchSchema = new Schema({
    name: String,
    sphere: String,
    gole: String,
    methods: String,
    results: String,
    recommendation: String,
    use: String,
    tags:  Array,
    author: Array,
    date: Date,
    download: String,
    lang: String

});

var Research = mongoose.model('Research', researchSchema);

module.exports = Research;
