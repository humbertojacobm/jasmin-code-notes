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



});

//min: 3:00