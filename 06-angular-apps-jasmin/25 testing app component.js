// in app.component.ts in the template, just we have the router-outlet
// it means that this component will handle the navigation.

//app.component.specs.ts

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { isMainThread } from 'worker_threads';
//forzing the test to execute.
fdescribe('AppComponent', () => {
  
  let fixture : ComponentFixture<AppComponent>; //try to get all the angular behaviour
  //and if I want to access to my component.
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  beforeEach( () => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;

  })

  it ("should have a router outlet", () => {
    // "By" allows to do queries as jquery
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  })

  //ng-test.
  //angular works with karma.
  
});
