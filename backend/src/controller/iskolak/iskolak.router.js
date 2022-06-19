const express = require('express');
const Iskolak = require('../../model/iskolak');
const controller = require('../base/base.controller')(Iskolak);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

//get one
router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    return controller.findOne(req, res, next);
});

//patch
router.patch('/:id', (req, res, next) => {
    console.log(req.body);

    return controller.updateOne(req, res, next);
});

//delete
router.delete('/:id', (req, res, next) => {
    console.log(req.body);

    return controller.deleteOne(req, res, next)
})


module.exports = router;