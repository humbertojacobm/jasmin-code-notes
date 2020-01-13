  //<work space>
  //spec/
  //  support/
  //     jasmin.json
  //  first.spec.js

  const saludar = require('../app').it;

  var x = true;
  //remember: primitive variables boolean, string, number
  //complex types: always those have a indepent memory space.
  var a = {
  }
  var b = {}

  const letra = "AB"
  var tmp = undefined;

  describe('verificar que la variable es true', () => {    
    it('La función saluda', () => {
        expect(saludar('Platzi')).toContain('Hola');
    })
    it('x is true', () =>{
       expect(x).toBeTruthy();
    })
    it('x is true', () =>{
        expect(x).toBeFalsy();
     })
     it('x is true', () =>{
        expect(x).toBe(true);
     })
     //a help toEqual
     it('x is true', () => {
         expect(x).toEqual(true);
     })

    it('Objetos iguales', () => {
        expect(a).toBe(b);//this get an error, because this is object
    })
    it('Objetos iguales', () => {
        expect(a).toEqual(b);//this helps to check objects.
    })
    it('check regular expressions', () => {
        expect(letra).toMatch("[^AB]");
    })
    it('check undefined values', () => {
        expect(tmp).toUndefined();
    })
  })

  