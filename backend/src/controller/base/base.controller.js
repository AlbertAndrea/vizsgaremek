const express = require('express');
const baseService = require('./base.service');
const createError = require('http-errors')

module.exports = (model) => {
    const service = baseService(model);
    return {
        findAll(req, res, next) {
            return service.findAll()
                .then(list => res.json(list));
        },
        findOne(req, res, next) {
            return service.findOne(req.params.id)
                .then(entity => res.json(entity))
                .catch(err => next(new createError.NotFound(err.message)));
        },
        deleteOne(req, res, next) {
            console.log(`deleteOne: ${req.params.id}`);
            return service.deleteOne(req.params.id)
                .then(() => res.json({}))
                .catch(err => {
                    res.statusCode = 404;
                    res.json(err);
            });
        },
        updateOne(req, res, next) {
            return service.updateOne(req.params.id, req.body)
                .then(entity => res.json(entity))
                .catch(err => {
                    res.statusCode = 501;
                    res.json(err);
            })
        },

    }
}