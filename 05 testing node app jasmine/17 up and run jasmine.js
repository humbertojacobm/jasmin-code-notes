//<root_folder>
//src   /angular
//server    /nodejs

//npm install jasmine --save-dev

// ./node_modules/jasmine/bin/jasmine.js

// spec/
//   support/
//     jasmine.json

//the most important

"spec_dir" : "spec"
"spec_files" : [
    "../server/**/*[sS]pec.js",
    "**/*[sS]pec.js"
],
"helpers" : [
    "helpers/**/*.js"
]

// server/server.spec.js

it ('funciona', () => {
    expect(true).toBeTruthy();
})


// package.json

"test:server" : "./node_modules/jasmine/bin/jasmine.js"

//that is running just server tests.

