var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var startupSchema = new Schema({
    name: String,
    sphere: Array,
    video: Array,
    presentation: Array,
    problem: String,
    solution: String,
    demo: Array,
    contacts: Array,
    needTofind: Array,
    skills: Array,
    materials: Array,
    info: Array,
    tags: Array,
    lang: String

});

var Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;