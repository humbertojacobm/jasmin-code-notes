//we will use coverage system

// istanbul.js.org 

// it is generating a report coverage in console.

//npm isntall --save-dev nyc

//package.json

"test:server:coverage" : "nyc node spec/specs.js",

//npm run test:server:coverage

//to see the coverage in other not default folder.

//package.json

"nyc" : {
    "report-dir" :
    "temp-dir" :
    "reporter" : [
        
    ]
}