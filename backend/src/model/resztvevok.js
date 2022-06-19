const mongoose = require('mongoose');

const ResztvevokSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
     },
     school: {
        type: String,
        require: true,
     },
     presentation: {
        type: Boolean,
        require: true,
     }
}, {
   timeStamps: true
});

module.exports = mongoose.model('Resztvevok', ResztvevokSchema);