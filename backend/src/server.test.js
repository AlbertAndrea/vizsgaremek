//nem működik ha a bejelentkezést beállítom

const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');

describe('REST API integration tests', () => {
    beforeEach( done => {
        const { host, user, pass } = config.get('database');
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

    test('GET /iskola', done => {
        supertest(app).get('/iskola').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /eloado', done => {
        supertest(app).get('/eloado').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /resztvevo', done => {
        supertest(app).get('/resztvevo').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /szekcio', done => {
        supertest(app).get('/szekcio').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /szallas', done => {
        supertest(app).get('/szallas').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });

    test('GET /user', done => {
        supertest(app).get('/user').expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done();
        });
    });
 
});
