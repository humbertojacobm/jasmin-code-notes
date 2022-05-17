//navigation.service.spec.ts
import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { isMainThread } from 'worker_threads';

fdescribe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() =>
    TestBed.configureTestingModule({
        providers: [NavigationService],
        imports: [RouterTestingModule]
    })
  );

  beforeEach(() => {
      service = TestBed.get(NavigationService);
  })

 
  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it ('should navigate to pins', () => {
      const navigation = spyOn((<any>service).router, 'navigate');
      service.goToPins();
      expect(navigation).toHaveBeenCalledWith(['/app/pins']);

  })

  it ('should navigate to editmode', () => {
    const navigation = spyOn((<any>service).router, 'navigate');
    service.goToPins();
    expect(navigation).toHaveBeenCalledWith(['/app/add']);
    
})

});
