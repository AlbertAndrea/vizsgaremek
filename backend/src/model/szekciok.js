const mongoose = require('mongoose');

const SzekciokSchema = mongoose.Schema({
    section: {
        type: String,
        require: true,
     },
     section_leader: {
        type: String,
        require: true,
     },
}, {
   timeStamps: true
});

module.exports = mongoose.model('Szekciok', SzekciokSchema);