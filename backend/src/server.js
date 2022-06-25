const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const { host, user, pass } = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass,
}).then ( conn => console.log('Connection success!') )
.catch( err => {
    throw new Error(err.message);
});

//Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authenticatedJwt = require('./model/auth/authenticate');

//Oldalak
app.use('/eloado', authenticatedJwt, require('./controller/eloado/eloado.router'));
app.use('/szekcio', require('./controller/szekcio/szekcio.router'));
app.use('/iskola', require('./controller/iskola/iskola.router'));
app.use('/resztvevo', require('./controller/resztvevo/resztvevo.router'));
app.use('/szallas', require('./controller/szallas/szallas.router'));
app.use('/login', require('./controller/login/login.router'));

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