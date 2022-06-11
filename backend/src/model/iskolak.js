const mongoose = require('mongoose');

const IskolakSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
     },
     address: {
        type: String,
        require: true,
     },
});

module.exports = mongoose.model('Iskolak', IskolakSchema);