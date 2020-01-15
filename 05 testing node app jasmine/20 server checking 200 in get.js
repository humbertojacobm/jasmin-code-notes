//getting the minimum setting to create unit test in server side.
//server.spec.js

const express = require('express');
const logger = require('morgan');
const PinsRouter = require('./routes/pins');
const Pins = require('./models/Pins');
const http = require('http');
const request = require('request');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.set('port', 3000);

app.api('/api', PinsRouter.router);

describe('Testing Router', () => {
    let server;
    beforeAll(() => {
        server = http.createServer(app);
        server.listen(3000);
    })

    afterAll(() => {
        server.close();
    })

    describe('get', () => {
        //get 200
        //when the method is async you need to use "done"
        it('200 and find pin', done => {
            //when you pins.find is using a callback, you need to declare that as parameter.
            //remember tha callFake is to overwrite a function.
            const data = [{id : 1}];
            spyOn(Pins,'find').and.callFake(callback => {
                callback(false, data);
            });

            request.get('http://localhost:3000/api', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(JSON.parse(response.body)).toEqual([{id : 1}]);
                done();//too important, when you do test in services you need to consider invoking "done"
            });

        })
    })
})
//npm run test:server:coverage






