const express = require('express');
const User = require('../../model/user');
const createError = require('http-errors');

const jwt = require('jsonwebtoken');

const router = express.Router();

//post
router.post('/', async (req, res, next) => {
    

    const { email, password } = req.body;
    const user =  await User.findOne({ email });

    if (!user) {
        return next(new createError.Unauthorized('Invalid email or password'));
    }


    const valid = user.verifyPasswordSync(password);
    if (!valid) {
        return next(new createError.Unauthorized('Invalid email or password')); 
    }
        
    const accessToken = jwt.sign({ //ezt tároljuk a tokenben
        _id: user._id,
        email: user.email,
        role: user.role,
    }, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: '1h',
    });

    return res.json({
        success: true,
        accessToken,
        user: {...user._doc, password: ''},
    });
});


module.exports = router;


// fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: '{"email": "test@test.hu", "password": "test789"}',
// }).then(r => r.json())
//     .then( d => console.log(d) );
