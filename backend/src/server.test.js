require('dotenv').config();

const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const { response } = require('jest-mock-req-res');
const { Test } = require('supertest');

const Eloado = require('./model/eloado');
const Iskola = require('./model/iskola');
const Resztvevo = require('./model/resztvevo');
const Szekcio = require('./model/szekcio');
const Szallas = require('./model/szallas');
const User = require('./model/user');

let token = {}

describe('REST API integration tests', () => {
    beforeEach( done => {
        const { host, user, pass } = config.get('database');
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then ( conn => {
            console.log('Connection success!');
           
         supertest(app).post('/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'testadmin1@test.hu',
                password: 'test789101'
            })
            .end((err, res) => {
                token = res.body.accessToken;

                done();
            })
        })
            .catch( err => {
                throw new Error(err.message);
            });
        });

    afterEach( done => {
        mongoose.connection.close( () => done() );
    });
    

    test('GET /iskola', done => {
        supertest(app).get('/iskola')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                done()
            });
    })

    test('GET /eloado', done => {
        supertest(app).get('/eloado').expect(200)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done()
        });
    });

    test('GET /resztvevo', done => {
        supertest(app).get('/resztvevo').expect(200)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done()
        });
    });

    test('GET /szekcio', done => {
        supertest(app).get('/resztvevo').expect(200)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            done()
        });
    });
});
