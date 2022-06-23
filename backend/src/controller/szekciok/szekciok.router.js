const express = require('express');
const Szekciok = require('../../model/szekciok');
const controller = require('../base/base.controller')(Szekciok);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

//get one
router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
});

//patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next);
});

//delete
router.delete('/:id', (req, res, next) => {
    return controller.deleteOne(req, res, next);
});

//post
router.post('/', (req, res, next) => {
    return controller.create(req, res, next);
});

module.exports = router;
