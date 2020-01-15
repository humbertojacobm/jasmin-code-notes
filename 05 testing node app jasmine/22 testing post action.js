//
const express = require('express');
const logger = require('morgan');
const PinsRouter = require('./routes/pins');
const Pins = require('./models/Pins');
const http = require('http');
const request = require('request');
var requestPromise = require('request-promise-native');
//npm install axios --save-dev
var axios = require('axios');
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
        it('500', done => {
            const data = [{id : 1}];
            spyOn(Pins,'find').and.callFake(callback => {
                callback(true, data);
            });
        
            request.get('http://localhost:3000/api', (error, response, body) => {
                expect(response.statusCode).toBe(500);        
                done();//too important, when you do test in services you need to consider invoking "done"
            });
        });        
    })

    describe('get/id', () => {        
        it('200 and findbyId', done => {            
            const data = [{id : 1}];
            const id = 0;
            spyOn(Pins,'findById').and.callFake( id ,callback => {
                callback(false, data);
            });

            request.get(`http://localhost:3000/api/${id}`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(JSON.parse(response.body)).toEqual([{id : 1}]);                
                done();//too important, when you do test in services you need to consider invoking "done"
            });

        })
        it('500 error', done => {
            const data = [{id : 1}];
            const id = 0;
            spyOn(Pins,'findById').and.callFake( id ,callback => {
                callback(false, data);
            });
        
            request.get(`http://localhost:3000/api/${id}`, (error, response, body) => {
                expect(response.statusCode).toBe(500);        
                done();//too important, when you do test in services you need to consider invoking "done"
            });
        });        
    })
    describe('Post', () => {
        const post = [{
            title: 'new job',
            author: 'humberto mori',
            description: 'developer job',
            percentage: 0,
            tags: [],
            assets: []
          }];
        //when the validation is async, you need to use "done" as parameter
        it('200', done => {
          spyOn(Pins, 'create').and.callFake(callback => {
            callback(false, {});
          });
          spyOn(requestPromise, 'get').and.returnValue(
              Promise.resolve('<title>new job</title><meta name="description" content="developer job">')
          );

          const assets = [{url: 'http://elcomercio.pe'}];
          axios.post(
              'http://localhost:3000/api', {title: 'title', author: 'author', description: 'description', assets}).then(
                res => {
                    expect(res.statusCode).toBe(200);
                    done();
               }
              )                       
        })
    })

})

