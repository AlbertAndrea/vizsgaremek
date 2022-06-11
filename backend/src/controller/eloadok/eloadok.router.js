const express = require('express');
const Eloadok = require('../../model/eloadok');
const controller = require('../base/base.controller')(Eloadok);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next)
})

module.exports = router;
