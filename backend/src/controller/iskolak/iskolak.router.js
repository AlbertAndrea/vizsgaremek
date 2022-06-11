const express = require('express');
const Iskolak = require('../../model/iskolak');
const controller = require('../base/base.controller')(Iskolak);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
})

module.exports = router;