const mongoose = require('mongoose');

const SzallasokSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
     },
     address: {
        type: String,
        require: true,
     },
}, {
    timeStamps: true
 });

module.exports = mongoose.model('Szallasok', SzallasokSchema);