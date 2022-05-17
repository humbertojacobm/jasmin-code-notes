//npm init
//https://jasmine.github.io/pages/getting_started.html

//npm install --save-dev jasmine

//node node_modules/jasmine/bin/jasmine init
  //this will create spec folder
  //<work space>
  //spec/
  //  support/
  //     jasmin.json

//"scripts":{"test" : "jasmine"}

//npm test

//to create your first spec

 //this will create spec folder
  //<work space>
  //spec/
  //  support/
  //     jasmin.json
  //  first.spec.js

const saludar = require('../app').it;

it('La función saluda', () => {
    expect(saludar('Platzi')).toBe('Hola Platzi');
})

