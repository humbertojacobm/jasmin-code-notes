//menu.component.spect.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';

fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
      //si necesitas validar en el template, usas el fixture.
      const title = fixture.debugElement.query(By.css('h1'));
      expect(title.nativeElement.innerHtml)
          .toBe('eLearning Management System');      
  })

  it('Testing ouput', () => {
      const value = true;
      component.clicked.subscribe( result => {
          expect(result).toBe(value);
      })
      component.clicked.next(value);
  })
});
