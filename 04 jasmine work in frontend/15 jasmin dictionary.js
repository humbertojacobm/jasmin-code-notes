//creating set test
describe("componente", () => {
    it("Deberia hacer...", () => {
        expect(true).toBe(true);
    })
})

//grouping by feature
describe("componente", () => {
    describe("funcionalidad uno", () => {
        it("Debería ...", () => {
            expect(true).toBe(true);
        })
    })
})

//negative test
expect(false).not.toBe(true);

//using this ===
expect(thing).toBe(realThing);

//the value is not undefined
expect(result).toBeDefined();

//the value is falsy: 0, '', false
expect(result).toBeFalsy();

//the values is truthy: 1, 'fds', true
expect(result).toBeTruthy();

//the current values is greater than the expected
expect(result).toBeGreaterThan(3);

//the current values is greater than or equal to expected
expect(result).toBeGreaterThanOrEqual(25);

//the current value is less than
expect(result).toBeLessThan(0);

//the current values is less than or equal to expected
expect(result).toBeLessThanOrEqual(5);

//the current value is NaN
expect(result).toBeNaN();

//the current values in -Infinity
expect(result).toBeNegativeInfinity();

//the current value is Infinity
expect(result).toBePositiveInfinity();

//the current value is null
expect(result).toBeNull();

//the current value contain a string
expect('Hola mundo').toContain('Hola');
expect(['Hola','mundo']).toContain('Hola');

//the current value is equal using a depth comparisong

expect(result).toEqual({"foo": ['bar','baz']});

//the spy was called

expect(mySpy).toHaveBeenCalled();
expect(mySpy).not.toHaveBeenCalled();

//the spy was called before another.

expect(mySpy).toHaveBeenCalledBefore(otherSpy);

//the spy was called n times

expect(mySpy).toHaveBeenCalledTimes(3);

//the spy was called with the following parameters

expect(mySpy).toHaveBeenCalledWith('foo','bar',2);

//Checking if the value has a class

const el = document.createElement('div');
el.className = 'foo bar baz';
expect(el).toHaveClass('bar');

//the current value compared with a regular expression

expect("my string").toMatch(/string$/);
expect("other string").toMatch("her");

// lifecycle

describe("componente", () => {
    //shared variables
    var foo = 0;
    beforeAll(() => {});
    beforeEach(() => {});
    AfterAll(() => {});
    AfterEach(() => {});
})

//disabling tests => using "x"

xdescribe('A spec', () => {
    it("waiting to be enable", () => {
       expect(true).toEqual(true);
    })
})

describe("A spec", () => {
    it("this run", () => {
        expect(true).toEqual(true);
    });
    xit("this is skipped", () => {
        expect(true).toEqual(true);
    })
})

//using spyOn

describe('A spy', () => {
   let foo,
        bar = null;
   beforeEach(() => {
       foo = {
           setBar: value => {
               bar = value;
            },
       };
       spyOn(foo, 'setBar');
       foo.setBar(123);
       foo.setBar(456, 'another program');
   })

   it('track that the spy was called', () => {
       expect(foo.setBar).toHaveBeenCalled();
   })
   it('track that spay was called', () => {
       expect(foo.setBar).toHaveBeenCalledTimes(2);
   })
   it('tracks all the arguments of its calls', () => {
       expect(foo.setBar).toHaveBeenCalledWith(123);
       expect(foo.setBar).toHaveBeenCalledWith(456, "another program");
   })

   //creating spys when we do not know if the function exists

   describe("create a 'bare' spy", () => {
       let notSure;
       beforeEach(function() {
           notSure = jasmine.createSpy('notSure');
           notSure("I","am","a","spy");
       })
       it("tracks that the spy was called", function() {
           expect(notSure).toHaveBeenCalled();
       })
   });

})

