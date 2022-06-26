const express = require('express');
const User = require('../../model/user');
const controller = require('../base/base.controller')(User);
 
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

//search
router.get('/search', (req, res, next) => {
    return controller.search(req, res, next);
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

//create
 router.post('/', (req, res, next) => {
     return controller.createOne(req, res, next);
 });

module.exports = router;
