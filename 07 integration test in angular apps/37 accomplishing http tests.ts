import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, 
    HttpTestingController} from '@angular/common/http/testing';
import {HttpHeaders} from '@angular/common/http';
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
      });
      it ('should execute get with headers', () => {
        const result = 'testing';
        const headers = new HttpHeaders().set('hmori-headers','hmori rules');
        service.get('/test',headers).subscribe( response => {
             expect(response).toBe(result);
        });
        const req = httpMock.expectOne(environment.apiEndPoint + '/test');
        expect(req.request.headers.get('hmori-headers')).toBe('hmori rules');
        expect(req.request.method).toBe('GET');
        req.flush(result);
    });
  });
  describe('POST', () => {
    it ('should execute POST', () => {
        const result = 'testing';
        service.post('/test', {}).subscribe( response => {
             expect(response).toBe(result);
        });
        const req = httpMock.expectOne(environment.apiEndPoint + '/test');
        expect(req.request.method).toBe('POST');
        req.flush(result);
    });
  });

  describe('put', () => {
    it ('should execute POST', () => {
        const result = 'testing';
        service.put('/test', {}).subscribe( response => {
             expect(response).toBe(result);
        });
        const req = httpMock.expectOne(environment.apiEndPoint + '/test');
        expect(req.request.method).toBe('PUT');
        req.flush(result);
    });
  });

  describe('delete', () => {
    it ('should execute DELETE', () => {
        const result = 'testing';
        service.delete('/test', {}).subscribe( response => {
             expect(response).toBe(result);
        });
        const req = httpMock.expectOne(environment.apiEndPoint + '/test');
        expect(req.request.method).toBe('DELETE');
        req.flush(result);
    });
  });

});