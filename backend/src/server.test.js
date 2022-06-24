const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const Iskolak = require('./model/iskolak');
const { response } = require('jest-mock-req-res');
const { Test } = require('supertest');

describe('REST API integration tests', () => {
    beforeEach( done => {
        const { host, user, pass } = config.get('database'); //ide teszt adatbázis kell majd !!!!
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then ( conn => {
            console.log('Connection success!');
            done();
        })
        .catch( err => {
            throw new Error(err.message);
        });
    });

    afterEach( done => {
        mongoose.connection.close( () => done() );
    });

    test('GET /iskolak', done => {
        supertest(app).get('/iskolak').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /szekciok', done => {
        supertest(app).get('/szekciok').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

});
