//layout.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

class MatBottomSheetStub{
   open(actions){
   }
}

fdescribe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      providers: [
          {provide: MatBottomSheet, useClass: MatBottomSheetStub}
      ],
      imports: [
          RouterTestingModule.withRoutes([
              {
                 path: '',
                 component: LayoutComponent
              },
              {
                 path: 'app/add',
                 component: LayoutComponent
              }
          ])          
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set editMode to false', () => {
      const verifyEditMode = spyOn(component, 'verifyEditMode').and.callThrough();

      fixture.ngZone.run(() => {
        (<any></any>component).router.navigate(['/']);
        fixture.whenStable().then(() => {
            expect(component.editMode).toBeFalsy();
            expect(verifyEditMode).toHaveBeenCalled();
        })        
      })
  })  
  it('should set editMode to false', () => {
    const verifyEditMode = spyOn(component, 'verifyEditMode').and.callThrough();

    fixture.ngZone.run(() => {
      (<any></any>component).router.navigate(['/app/add']);
      fixture.whenStable().then(() => {
          expect(component.editMode).toBeTruthy();
          expect(verifyEditMode).toHaveBeenCalled();
      })        
    })
})
  it('Should open', () => {
      const actions = {};
      const open = spyOn((<any></any>component).bottomSheet,'open');
      
      component.openBottonSheet();
      expect(open).toHaveBeenCalled();
      
  })  
});
//TO-DO: TEST HAS TO BE WITH ACTIONS
//actions.components.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';

class MatBottomSheetRefStub{
    dismiss(){}
}
class PinsServiceStub{
    resolveActionObserver(){}
}

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      providers: [
          {provide: MatBottomSheetRef , useClass: MatBottomSheetRefStub},
          {provide: pinsService, useClass: PinsServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Testing openLink', () => {
    const e = {
        preventDefault : () => {
        }
    };
    const action = "";
    const bottomSheefRef = spyOn((<any></any>component).bottomSheetRef,"dismiss").and.callThrough();
    const pinServiceRef = spyOn((<any></any>component).pinsService, "resolveActionObserver").and.callThrough();
    component.openLink(e,action);
    expect(bottomSheefRef).toHaveBeenCalled();
    expect(pinServiceRef).toHaveBeenCalled();
  });

});



