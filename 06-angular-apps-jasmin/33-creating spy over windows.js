import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PinsComponent} from './pins.Component'
import {PINS} from './pins'


class RepositoryServiceStub{
 observer = new Subject();
 
 getPins() {
     return this.observer;
 }

 resolvePins(){
  this.observer.next(JSON.parse(JSON.stringify(PINS)));//we are ensuring that we have a copy, so we are passing this by value
 }

 updatePin(){
   return of(true);//to return observables.
 }
}

class MatSnackBarStub{
  open(){

  }
}

class PinsServiceStub{
  observer = new Subject();
  $actionObserver = this.observer.asObservable();//when you observable has pipe.

  public resolve(action) {
      return this.observer.next(action);
  }
}



fdescribe('PinsComponent' , () => {

   let component: PinsComponent;
   let fixture: ComponentFixture<PinsComponent>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
         declarations: [ PinsComponent],
         providers: [
            {provide: RepositoryService, useClass: RepositoryServiceStub},
            {provide: SnackBar, useClass: MatSnackBarStub},
            {provide: PinsService, useClass: PinsServiceStub},
            //{provide: FormBuilder, useClass: FormBuilderStub},
        ],
        imports: [ReactiveFormsModule] //{provide: FormBuilder, useClass: FormBuilderStub},
        ,schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA] //to avoid errors in html tags that we do not have definition
     })
     .compileComponents();
   }));

   beforeEach(()=> {
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('when new page is open', () => {
     const open = spyOn(window,'open'); //windows is globally

     component.openURL('https://www.algo.com');

     expect(open).toHaveBeenCalledWith('https://www.algo.com','_blank');

   });

   it('when update progress',() => {
     component.pins = PINS;
     const pin = PINS[0];
     const updatePin = spyOn((component).repository, 'updatePin').and.returnValue(of(true));
     const open = spyOn((component).snackBar,'open');
     const pinService = TestBed.get(PinsService);

     pinService.resolve('save');
     expect(open).toHaveBeenCalled();
   });

});