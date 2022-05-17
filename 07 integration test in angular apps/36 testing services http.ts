import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, 
    HttpTestingController} from '@angular/common/http/testing';
import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });
  //until now, we are invoking the constructor.

  beforeEach(() => {
    injector  = getTestBed();
    service = TestBed.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterAll(() => {
    injector  = null;
    service = null;
    httpMock = null;
  });

  //javascript maneja un solo hilo de ejecución.

  describe('GET', () => {
      it ('should execute get', () => {
          const result = 'testing';
          service.get('/test').subscribe( response => {
               expect(response).toBe(result);
          });
          const req = httpMock.expectOne(environment.apiEndPoint + '/test');
          expect(req.request.method).toBe('GET');
          req.flush(result);
      })
  })

});