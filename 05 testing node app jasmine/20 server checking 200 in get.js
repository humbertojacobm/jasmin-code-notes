//getting the minimum setting to create unit test in server side.
//server.spec.js

const express = require('express');
const logger = require('morgan');
const PinsRouter = require('./routes/pins');
const Pins = require('')
const http = require('http');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.set('port', 3000);

app.api('/api', PinsRouter);

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
        it('200 and find pin', () => {
            spyOn(Pins,'find')
        })
    })
})
//the time is 7:00 min.






