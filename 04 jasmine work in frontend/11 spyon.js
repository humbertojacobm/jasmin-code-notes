//we need just test the code without enter in his dependencies.

//we use spyon to intercept the function call and it replace that by 
//another response.

//example:

function GetMonthApi() {
    this.currentMonth = function () {
      return 'May';
    }
    this.nextMonth = function () {
      return 'June'
    }
}
export function MonthCalculator() {
this.api = new GetMonthApi();
this.getNextMonth = function() {
    return this.api.nextMonth();
}
this.getCurrentMonth = function() {
    return this.api.currentMonth();
}
}

//the unit test

describe ('MonthCalcultor', () => {
    it('returns the current month', () => {
        //arrange
        const monthCalculator = new MonthCalculator();
        //act
        const month = monthCalculator.getCurrentMonth();
        //assert
        expect(month).toBe('May');
    })
})

//using spyon
describe ('MonthCalcultor', () => {
    it('returns the current month', () => {
        //arrange
        const monthCalculator = new MonthCalculator();
        //arrange spyon
        //INTERCEPT THE FUNCTION THAT IS INSIDE OF monthCalculator.getCurrentMonth()
        const spy = spyon(monthCalculator.api,'currentMonth')
          .and
          .returnValue('Humberto Month');
        //act
        const month = monthCalculator.getCurrentMonth();
        //assert
        expect(month).toBe('Humberto Month');
        //assert spyon
        //THIS VERIFY THE EXECUTION OF THE SPYON
        expect(spy).toHaveBeenCalled();
    });
    it('returns the next month', () => {
        //arrange
        const monthCalculator = new MonthCalculator();
        //arrange spyon
        //INTERCEPT THE FUNCTION THAT IS INSIDE OF monthCalculator.getCurrentMonth()
        const spy = spyon(monthCalculator.api,'nextMonth')
          .and
          .returnValue('Humberto Month');
        //act
        const month = monthCalculator.getNextMonth();
        //assert
        expect(month).toBe('Humberto Month');
        //assert spyon
        //THIS VERIFY THE EXECUTION OF THE SPYON
        expect(spy).toHaveBeenCalled();
    })
})

//how to create an spy
spyon(obj,'method');

//how to verify that a method was called
const ref = spyOn(obj,'method');
expect(ref).toHaveBeenCalled();
//or
expect(obj.method).toHaveBeenCalled();

//how to check that a method was called using a specific parameter

const ref = spyOn(obj,'method');
expect(ref).toHaveBeenCalled('foo', 'bar');
expect(obj.method).toHaveBeenCalled('foo','baar');

//how to check the executions number of a method?
expect(obj.method.callCount).toBe(2);

//how to spy a method without modify its behaviour.

spyOn(obj,'method').andCallThrough();

//how to change the returned value of a method

spyOn(obj,'method').andReturn('value');

//how to overwrite a method

sypOn(obj,'method').andCallFake(() => 'this is a function');

