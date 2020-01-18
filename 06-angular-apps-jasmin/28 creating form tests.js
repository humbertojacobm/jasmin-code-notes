// src/app/components/form/form.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { of } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { MatSnackBar } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormArray } from '@angular/forms';

class RepositoryServiceStub {
   savePins() {
     return of(true);
   }
}

class NavigationServiceStub{
  goToPins(){

  }
}

class MatSnackBarStub{
  open(){
    return {
      afterDismissd : () => {
        return of(true);
      }
    }
  }
}

fdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
          {provide: RepositoryService, useClass: RepositoryServiceStub },
          {provide: NavigationService, useClass: NavigationServiceStub},
          {provide: MatSnackBar, useClass: MatSnackBarStub}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));
  //the first test, that I should do is try to check all dependencies that the component has.
  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //ng test --codeCoverage
  
  describe('when component is initialized', () => {
      it('should create the forms', () => {
          console.log(component.firstFormGroup.controls);
          expect(Objects.keys(component.firstFormGroup.controls))
               .toEqual(['title','author','description']);
          expect(Objects.keys(component.firstFormGroup.controls))
               .toEqual(['firstAsset','assets']);
      })
  });

  describe('When addAsset is executed', () => {
    it('should add new group', () => {
        const assets = <FormArray></FormArray>component.secondFormGroup.get('assets');

        component.addAsset();
        component.addAsset();
        console.log(Object.keys(assets.controls));
        expect(Object.keys(assets.controls)).toEqual(['0','1']);
    })
  })

  describe('When deleteAsset', () => {
      it('should remove the form control', () => {
        const assets = <FormArray></FormArray>component.secondFormGroup.get('assets');

        component.addAsset();
        component.deleteAsset(0);

        expect(Object.keys(assets.controls)).toEqual([]);

      })
  })
  describe('when savePins is executed', () => {
      it('Should navigate to pins view', () => {
          //si el "navigate" es privado, puedes usar any para acceder a el
          const navigate = spyOn((<any/>component).navigate, 'goToPins');
          //como ya hemos simulado en los stubs, debemos usar callThrough()
          const open = spyOn((<any/>component).snackBar, 'open').and.callThrough();
          
          component.savePin();

          expect(navigate).toHaveBeenCalled();
          expect(open).toHaveBeenCalledWith('Your pin is saved, Redirecting ...', 'Cool!', {
            duration: 2000
          });



      })
  })
});

//min: 3:00