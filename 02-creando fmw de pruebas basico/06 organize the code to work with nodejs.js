//how to export in nodejs

const saludar = nomber => `Hola ${nomber}`;

module.exports = saludar;

//

function expect (actual) {
    return {
        toBe(expected){
            if(actual !== expected){
                throw new Error('Prueba no exitosa')
            }
        }
    };
}

function it(title, callback){
    try{
       callback();
       console.log(`ok ${title}`);
    }catch{
        throw new Error(`bad ${title}`)
    }
}

module.exports = {
    expect,
    it
}

//app.spec.js

const it = require('./framework').it;
const expect = require('./framework').expect;
const saludar = require('./app');

it('La función saluda', () => {
    expect(saludar('Platzi')).toBe('Hola Platzi');
})


//terminal: node app.spec.js

