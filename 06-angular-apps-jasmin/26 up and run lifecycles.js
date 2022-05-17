//if you want to test some class or const, remeber export those.

//app-routing.module.spec.ts

import {routes} from './app-routing.module';
import { isMainThread } from 'worker_threads';


fdescribe('App Routing', () => {

    beforeAll(()=> {
        console.log("beforeAll");
    });

    beforeEach(()=> {
        console.log("beforeEach");
    });

    afterAll(()=> {
        console.log("afterAll");
    });

    afterEach(()=> {
        console.log("afterEach");
    });

 it ('should have app as path', () => {
     expect(routes[0].path).toBe("app");
     expect(routes[0].children).toContain({
        path: 'pins',
        component: PinsComponent
      });
    
 })
})