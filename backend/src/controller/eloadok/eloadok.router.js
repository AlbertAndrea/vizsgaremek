const express = require('express');
const Eloadok = require('../../model/eloadok');
const controller = require('../base/base.controller')(Eloadok);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
})

//get one
router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
})

//patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next);
})

module.exports = router;
