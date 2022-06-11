const mongoose = require('mongoose');

const EloadokSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
     },
     lastName: {
        type: String,
        require: true,
     },
     school: {
        type: String,
        require: true,
     },
     presentation: {
        type: String,
        require: true,
     },
     section: {
        type: String,
        require: true,
     },
});

module.exports = mongoose.model('Eloadok', EloadokSchema);