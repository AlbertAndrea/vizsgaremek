const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('mongoose');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then ( conn => console.log('Connection success!') )
.catch( err => {
    throw new Error(err.message)
});

//Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

//Eloadok
app.use('/eloadok', require('./controller/eloadok/eloadok.router'));
app.use('/szekciok', require('./controller/szekciok/szekciok.router'));
app.use('/iskolak', require('./controller/iskolak/iskolak.router'));

 app.use('/', (req, res) => {
     console.log(req.url);
     res.send('api server');
 })

app.use((err, req, res, next) => {
    res.status = 500;
    res.json({
        hasError: true,
        message: 'Server Error',
    });
});

module.exports = app;