const mongoose = require('mongoose');

const ResztvevokSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        validate: {
            validator: function(v) {
               return /^[a-űA-Ű \-\.]{5,75}$/.test(v);
               }
         }
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