//pins.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PINS } from 'src/app/services/mocks/pins';

import { PinsComponent } from './pins.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PinsService } from './pins.service';
import { Subject, of } from 'rxjs';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class RepositoryServiceStub{
    observer = new Subject();
    getPins(){
       return this.observer;
    }
    resolveGetPins(){
        this.observer.next( JSON.parse(JSON.stringify(PINS)));
    }
    updatePin(){
       return of(true);
    }
}

class MatSnackBarStub{
  open(){

  }

}

class PinsServiceStub{
  observer = new Subject();
  $actionObserver = observer.asObservable();
  public resolve(action){
      return this.observer.next(action);
  }
}

fdescribe('PinsComponent', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinsComponent],
      providers: [
          {provide : RepositoryService, useClass : RepositoryServiceStub},
          {provide: MatSnackBar, useClass : MatSnackBarStub},
          {provide: PinsService, useClass : PinsServiceStub}
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
//
export const PINS = [
    {
      _id: '5c520d9c7b26f12e6d018090',
      title: 'Learning path 1',
      author: 'Cristian Marquez',
      description: 'Description',
      percentage: 0,
      url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
      tags: ['Javascript', 'Code', 'Video'],
      assets: [
        {
          _id: '5c520d9c7b26f12e6d0180a0',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: false
        },
        {
          _id: '5c520d9c7b26f12e6d0180a1',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: false
        },
        {
          _id: '5c520d9c7b26f12e6d0180a2',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: false
        }
      ]
    },
    {
      _id: '5c520d9c7b26f12e6d018091',
      title: 'Learning path 2',
      author: 'Cristian Marquez',
      description: 'Description',
      percentage: 50,
      url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
      tags: ['Javascript', 'Code', 'Video'],
      assets: [
        {
          _id: '5c520d9c7b26f12e6d0180a3',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: true
        },
        {
          _id: '5c520d9c7b26f12e6d0180a4',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: false
        },
        {
          _id: '5c520d9c7b26f12e6d0180a5',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: false
        }
      ]
    },
    {
      _id: '5c520d9c7b26f12e6d018093',
      title: 'Learning path 3',
      author: 'Cristian Marquez',
      description: 'Description',
      percentage: 100,
      url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
      tags: ['Javascript', 'Code', 'Video'],
      assets: [
        {
          _id: '5c520d9c7b26f12e6d0180a6',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: true
        },
        {
          _id: '5c520d9c7b26f12e6d0180a7',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: true
        },
        {
          _id: '5c520d9c7b26f12e6d0180a8',
          url: 'https://www.youtube.com/watch?v=mC2LRZ23AFU',
          title: 'Video Title',
          description: 'Video description',
          readed: true
        }
      ]
    }
  ];
  